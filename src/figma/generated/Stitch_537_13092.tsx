import { assetSrc } from '../assetSrc'

const imgCellularConnection = assetSrc('537:13092', 'imgCellularConnection');
const imgWifi = assetSrc('537:13092', 'imgWifi');
const imgBattery = assetSrc('537:13092', 'imgBattery');
const img9347D81F94755Ec2B1Ec26926Dd61C9D68Gqpfay1 = assetSrc('537:13092', 'img9347D81F94755Ec2B1Ec26926Dd61C9D68Gqpfay1');
const imgIPhone16ProBlackTitaniumPortrait = assetSrc('537:13092', 'imgIPhone16ProBlackTitaniumPortrait');
const imgImage316 = assetSrc('537:13092', 'imgImage316');

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
    <div className="relative size-full" data-node-id="537:13092" data-name="Examples/Alert - iPhone">
      <div className="absolute bg-[var(--backgrounds\/primary,white)] content-stretch flex flex-col inset-[25px_-6px_-89px_6px] items-center overflow-clip rounded-[44px]" data-node-id="537:13093" data-name="Contents">
        <div className="content-stretch flex flex-col h-[72px] items-start overflow-clip relative rounded-tl-[44px] rounded-tr-[44px] shrink-0 w-full" data-node-id="537:13094" data-name="Navigation Bar">
          <div className="absolute border-[var(--miscellaneous\/bar-border,rgba(0,0,0,0.3))] border-b-[0.333px] border-solid inset-0 overflow-clip" data-node-id="I537:13094;529:98675" data-name="Materials">
            <div className="absolute backdrop-blur-[25px] bg-[rgba(255,255,255,0.75)] inset-[0_0_-0.33px_0] mix-blend-hard-light" data-node-id="I537:13094;529:98675;510:79115" data-name="Chrome" />
          </div>
          <StatusBarIPhone className="content-stretch flex flex-col h-[54px] items-start pt-[21px] relative shrink-0 w-[402px]" />
        </div>
        <div className="h-[776px] relative shrink-0 w-full" data-node-id="537:13095" data-name="Content Area">
          <div className="absolute drop-shadow-[0px_4px_2px_rgba(0,0,0,0.15)] h-[496px] left-[39px] overflow-clip rounded-[15px] top-[24px] w-[309px]" data-node-id="537:13096">
            <div className="absolute h-[970px] left-[-19px] rounded-[15px] top-0 w-[726.553px]" data-node-id="537:13097" data-name="9347D81F-9475-5EC2-B1EC-26926DD61C9D_68gqpfay 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[15px] size-full" src={img9347D81F94755Ec2B1Ec26926Dd61C9D68Gqpfay1} />
            </div>
          </div>
          <div className="absolute bg-[#0005a1] h-[62px] left-[34px] overflow-clip rounded-[4px] top-[565px] w-[336px]" data-node-id="537:13098" data-name="Div [create_btn]">
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Microsoft_YaHei_UI:Regular'] h-[30px] justify-center leading-[0] left-[123px] not-italic text-[20px] text-white top-[31px] w-[138px]" data-node-id="537:13099">
              <p className="leading-[20px]">编辑选区</p>
            </div>
          </div>
          <div className="absolute bg-[#0005a1] h-[62px] left-[34px] overflow-clip rounded-[4px] top-[650px] w-[336px]" data-node-id="537:13100" data-name="Div [create_btn]">
            <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Microsoft_YaHei_UI:Regular'] h-[30px] justify-center leading-[0] left-[123px] not-italic text-[20px] text-white top-[31px] w-[138px]" data-node-id="537:13101">
              <p className="leading-[20px]">完成设计</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[874px] left-0 top-0 w-[402px]" data-node-id="537:13102" data-name="Bezel">
        <div className="absolute h-[920px] left-[-24px] top-[-23px] w-[450px]" data-node-id="I537:13102;2969:14793" data-name="iPhone 16 Pro - Black Titanium - Portrait">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIPhone16ProBlackTitaniumPortrait} />
        </div>
      </div>
      <div className="absolute h-[44px] left-[14px] top-[57px] w-[25.5px]" data-node-id="537:13103" data-name="image 316">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage316} />
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Microsoft_YaHei_UI:Regular'] justify-center leading-[0] left-[169px] not-italic text-[16px] text-[rgba(29,29,29,0.8)] top-[77px] whitespace-nowrap" data-node-id="537:13104">
        <p className="leading-[14px]">效果预览</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Microsoft_YaHei_UI:Regular'] justify-center leading-[0] left-[47px] not-italic text-[10px] text-[rgba(29,29,29,0.5)] top-[78px] whitespace-nowrap" data-node-id="537:13105">
        <p className="leading-[14px]">返回上级</p>
      </div>
    </div>
  );
}
