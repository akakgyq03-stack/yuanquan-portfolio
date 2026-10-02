import { assetSrc } from '../assetSrc'

const imgCellularConnection = assetSrc('537:2192', 'imgCellularConnection');
const imgWifi = assetSrc('537:2192', 'imgWifi');
const imgBattery = assetSrc('537:2192', 'imgBattery');

type StatusBarIPhoneProps = {
  className?: string;
  background?: "False";
};

function StatusBarIPhone({ className, background = "False" }: StatusBarIPhoneProps) {
  return (
    <div className={className || "content-stretch flex flex-col h-[50px] items-start pt-[21px] relative w-[402px]"} data-node-id="537:1127">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-node-id="537:1128" data-name="Frame">
        <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px pl-[16px] pr-[6px] relative" data-node-id="537:1129" data-name="Time">
          <p className="[word-break:break-word] font-['SF_Pro:Semibold'] font-[590] leading-[22px] relative shrink-0 text-[17px] text-[color:var(--labels\/primary,black)] text-center whitespace-nowrap" data-node-id="537:1130" style={{ fontVariationSettings: '"wdth" 100' }}>
            9:41
          </p>
        </div>
        <div className="h-[10px] relative shrink-0 w-[124px]" data-node-id="537:1131" data-name="Dynamic Island spacer" />
        <div className="content-stretch flex flex-[1_0_0] gap-[7px] items-center justify-center min-w-px pl-[6px] pr-[16px] relative" data-node-id="537:1132" data-name="Levels">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-node-id="537:1133" data-name="Cellular Connection">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCellularConnection} />
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-node-id="537:1134" data-name="Wifi">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgWifi} />
          </div>
          <div className="h-[13px] relative shrink-0 w-[27.328px]" data-node-id="537:1135" data-name="Battery">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBattery} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Contents() {
  return (
    <div className="bg-[var(--backgrounds\/primary,white)] content-stretch flex flex-col items-center overflow-clip relative rounded-[44px] size-full" data-node-id="537:2192" data-name="Contents">
      <div className="content-stretch flex flex-col h-[96px] items-start overflow-clip relative rounded-tl-[44px] rounded-tr-[44px] shrink-0 w-full" data-node-id="537:2193" data-name="Navigation Bar">
        <div className="absolute border-[var(--miscellaneous\/bar-border,rgba(0,0,0,0.3))] border-b-[0.333px] border-solid inset-0 overflow-clip" data-node-id="I537:2193;529:98675" data-name="Materials">
          <div className="absolute backdrop-blur-[25px] bg-[rgba(255,255,255,0.75)] inset-[0_0_-0.33px_0] mix-blend-hard-light" data-node-id="I537:2193;529:98675;510:79115" data-name="Chrome" />
        </div>
        <StatusBarIPhone className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-[402px]" />
      </div>
      <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="537:2194" data-name="Content Area" />
    </div>
  );
}
