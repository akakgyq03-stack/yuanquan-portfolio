import { assetSrc } from '../assetSrc'

const imgCellularConnection = assetSrc('537:13063', 'imgCellularConnection');
const imgWifi = assetSrc('537:13063', 'imgWifi');
const imgBattery = assetSrc('537:13063', 'imgBattery');
const imgImage321 = assetSrc('537:13063', 'imgImage321');
const imgImage20 = assetSrc('537:13063', 'imgImage20');
const imgIPhone16ProBlackTitaniumPortrait = assetSrc('537:13063', 'imgIPhone16ProBlackTitaniumPortrait');
const imgImage316 = assetSrc('537:13063', 'imgImage316');
const img6862D527F7F4A55E17D4Fe13608193384E7519Fcec4290Ce8B0751Bee5Ccc0Df11 = assetSrc('537:13063', 'img6862D527F7F4A55E17D4Fe13608193384E7519Fcec4290Ce8B0751Bee5Ccc0Df11');
const imgImage320 = assetSrc('537:13063', 'imgImage320');

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

export default function ExamplesAlertIPhone() {
  return (
    <div className="relative size-full" data-node-id="537:13063" data-name="Examples/Alert - iPhone">
      <div className="absolute bg-[var(--backgrounds\/primary,white)] content-stretch flex flex-col inset-[25px_-6px_-89px_6px] items-center overflow-clip rounded-[44px]" data-node-id="537:13064" data-name="Contents">
        <div className="content-stretch flex flex-col h-[72px] items-start overflow-clip relative rounded-tl-[44px] rounded-tr-[44px] shrink-0 w-full" data-node-id="537:13065" data-name="Navigation Bar">
          <div className="absolute border-[var(--miscellaneous\/bar-border,rgba(0,0,0,0.3))] border-b-[0.333px] border-solid inset-0 overflow-clip" data-node-id="I537:13065;529:98675" data-name="Materials">
            <div className="absolute backdrop-blur-[25px] bg-[rgba(255,255,255,0.75)] inset-[0_0_-0.33px_0] mix-blend-hard-light" data-node-id="I537:13065;529:98675;510:79115" data-name="Chrome" />
          </div>
          <StatusBarIPhone className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-[402px]" />
        </div>
        <div className="h-[776px] relative shrink-0 w-full" data-node-id="537:13066" data-name="Content Area">
          <div className="absolute contents left-[208px] top-[591px]" data-node-id="537:13067" data-name="Mask group">
            <div className="absolute h-[494px] left-[157px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[51px_366px] mask-size-[159px_104.896px] rounded-[15px] top-[225px] w-[370.148px]" data-node-id="537:13069" style={{ maskImage: `url("${imgImage320}")` }} data-name="image 320">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[15px] size-full" src={imgImage321} />
            </div>
          </div>
          <div className="absolute contents left-[36px] top-[591px]" data-node-id="537:13070" data-name="Mask group">
            <div className="absolute h-[306px] left-[36px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[159px_104.896px] top-[591px] w-[229.59px]" data-node-id="537:13072" style={{ maskImage: `url("${imgImage320}")` }} data-name="image 319">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage321} />
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] left-[36px] not-italic text-[#1d1d1d] text-[16px] top-[438px] whitespace-nowrap" data-node-id="537:13073">
            <p className="leading-[16px]">选择绣法</p>
          </div>
          <div className="absolute contents left-[36px] top-[456px]" data-node-id="537:13074">
            <div className="absolute contents left-[36px] top-[456px]" data-node-id="537:13075" data-name="Mask group">
              <div className="absolute border-8 border-solid border-white h-[613px] left-[-56px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[92px_33px] mask-size-[159px_104.896px] rounded-[15px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.2),0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_6px_0px_rgba(0,0,0,0.1)] top-[423px] w-[460px]" data-node-id="537:13077" style={{ maskImage: `url("${imgImage320}")` }} data-name="image 20">
                <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[15px]">
                  <div className="absolute bg-white inset-0 rounded-[15px]" />
                  <div className="absolute inset-0 overflow-hidden rounded-[15px]">
                    <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgImage20} />
                  </div>
                </div>
              </div>
            </div>
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] left-[39px] not-italic text-[14px] text-[rgba(29,29,29,0.8)] top-[573px] whitespace-nowrap" data-node-id="537:13078">
              <p className="leading-[16px]">绉绣</p>
            </div>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] left-[40px] not-italic text-[14px] text-[rgba(29,29,29,0.8)] top-[710px] whitespace-nowrap" data-node-id="537:13079">
            <p className="leading-[16px]">平绣</p>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] left-[212px] not-italic text-[14px] text-[rgba(29,29,29,0.8)] top-[572px] whitespace-nowrap" data-node-id="537:13080">
            <p className="leading-[16px]">瓣绣</p>
          </div>
          <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] left-[208px] not-italic text-[14px] text-[rgba(29,29,29,0.8)] top-[710px] whitespace-nowrap" data-node-id="537:13081">
            <p className="leading-[16px]">锡绣</p>
          </div>
          <div className="absolute contents left-[208px] top-[456px]" data-node-id="537:13082" data-name="Mask group">
            <div className="absolute h-[337px] left-[186px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[22px_232px] mask-size-[159px_104.896px] top-[224px] w-[252.849px]" data-node-id="537:13084" style={{ maskImage: `url("${imgImage320}")` }} data-name="image 318">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage20} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[874px] left-0 top-0 w-[402px]" data-node-id="537:13085" data-name="Bezel">
        <div className="absolute h-[920px] left-[-24px] top-[-23px] w-[450px]" data-node-id="I537:13085;2969:14793" data-name="iPhone 16 Pro - Black Titanium - Portrait">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIPhone16ProBlackTitaniumPortrait} />
        </div>
      </div>
      <div className="absolute h-[44px] left-[14px] top-[57px] w-[25.5px]" data-node-id="537:13086" data-name="image 316">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage316} />
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Microsoft_YaHei_UI:Regular'] justify-center leading-[0] left-[169px] not-italic text-[16px] text-[rgba(29,29,29,0.8)] top-[77px] whitespace-nowrap" data-node-id="537:13087">
        <p className="leading-[14px]">纹样生成</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Microsoft_YaHei_UI:Regular'] justify-center leading-[0] left-[47px] not-italic text-[10px] text-[rgba(29,29,29,0.5)] top-[78px] whitespace-nowrap" data-node-id="537:13088">
        <p className="leading-[14px]">返回上级</p>
      </div>
      <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[29px] top-[111px] w-[348px]" data-node-id="537:13089" data-name="Div [upload_box]">
        <div className="[word-break:break-word] flex flex-col font-['Microsoft_YaHei_UI:Regular'] h-[29px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(29,29,29,0.8)] tracking-[3.84px] w-[144px]" data-node-id="537:13090">
          <p className="leading-[24px]">{` 生成结果`}</p>
        </div>
        <div className="border-8 border-solid border-white relative rounded-[4px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.2),0px_0px_2px_0px_rgba(0,0,0,0.08),0px_2px_6px_0px_rgba(0,0,0,0.1)] shrink-0 size-[356px]" data-node-id="537:13091" data-name="6862d527f7f4a55e17d4fe13608193384e7519fcec4290ce8b0751bee5ccc0df (1) 1">
          <div aria-hidden className="absolute bg-clip-padding border-8 border-[transparent] border-solid inset-0 pointer-events-none rounded-[4px]">
            <div className="absolute bg-clip-padding bg-white border-8 border-[transparent] border-solid inset-0 rounded-[4px]" />
            <div className="absolute bg-clip-padding border-8 border-[transparent] border-solid inset-0 overflow-hidden rounded-[4px]">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img6862D527F7F4A55E17D4Fe13608193384E7519Fcec4290Ce8B0751Bee5Ccc0Df11} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
