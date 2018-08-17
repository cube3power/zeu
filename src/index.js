import BarMeter from './bar-meter';
import DigitalClcok from './digital-clock';
import RoundFan from './round-fan';
import VolumeMeter from './volume-meter';
import Heartbeat from './heartbeat';
import WarningDialog from './warning-dialog';
import BlinkText from './blink-text';
import ScrollPanel from './scroll-panel';
import MessageQueue from './message-queue';
import RoundRadar from './round-radar';
import RoundGauge from './round-gauge';
import StopWatch from './stop-watch';
import TextMeter from './text-meter';
import AnimationTimer from './animation-timer';
import Settings from './settings';
import SpeedCircle from './speed-circle';

export {
  BarMeter,
  DigitalClcok,
  VolumeMeter,
  Heartbeat,
  MessageQueue,
  WarningDialog,
  BlinkText,
  RoundRadar,
  RoundGauge,
  StopWatch,
  ScrollPanel,
  Settings,
  // v1.0.0
  SpeedCircle,
  TextMeter,
  RoundFan
};

// Fire up window.requestAnimationFrame()
AnimationTimer.render();
