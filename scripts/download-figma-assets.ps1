param(
  [string]$Manifest = (Join-Path $PSScriptRoot '..\figma-assets.json'),
  [int]$ThrottleLimit = 12
)

$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$items = (Get-Content -Raw -LiteralPath $Manifest | ConvertFrom-Json).assets

$items | ForEach-Object -Parallel {
  $item = $_
  $root = $using:projectRoot
  $destination = Join-Path $root $item.file
  $directory = Split-Path -Parent $destination
  New-Item -ItemType Directory -Force -Path $directory | Out-Null

  if ((Test-Path -LiteralPath $destination) -and ((Get-Item -LiteralPath $destination).Length -gt 0)) {
    return
  }

  for ($attempt = 1; $attempt -le 3; $attempt++) {
    try {
      Invoke-WebRequest -Uri $item.url -OutFile $destination -UseBasicParsing
      if ((Get-Item -LiteralPath $destination).Length -gt 0) { break }
    } catch {
      if ($attempt -eq 3) { throw }
      Start-Sleep -Seconds $attempt
    }
  }
} -ThrottleLimit $ThrottleLimit

$missing = @($items | Where-Object {
  $path = Join-Path $projectRoot $_.file
  -not (Test-Path -LiteralPath $path) -or (Get-Item -LiteralPath $path).Length -eq 0
})

if ($missing.Count -gt 0) {
  Write-Error "$($missing.Count) Figma assets failed to download."
  exit 1
}

Write-Output "Downloaded and verified $($items.Count) Figma assets."
