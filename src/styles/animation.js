import { keyframes } from "styled-components";

const fadeIn = keyframes`
0%{
    opacity:0%;
}
100%{
    opacity:100%;
}
`;
const fadeOut = keyframes`
0%{
  opacity:100%;
}
100%{
  opacity:0%;
}
`;

const fadeInOut = keyframes`
0%{
  opacity:0%;
}

30%,60%{
  opacity:100%
}
100%{
  opacity:0%;
}

`;

const bounceIn = keyframes`
0%, 100%, 20%, 40%, 60%, 80% {
    transition-timing-function: cubic-bezier(0.215, .61, .355, 1)
  }
  0% {
    opacity: 0;
    transform: scale3d(.3, .3, .3)
  }
  20% {
    transform: scale3d(1.1, 1.1, 1.1)
  }
  40% {
    transform: scale3d(.9, .9, .9)
  }
  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03)
  }
  80% {
    transform: scale3d(.97, .97, .97)
  }
  100% {
    opacity: 1;
    transform: scale3d(1, 1, 1)
  }`;

const rubberBand = keyframes` 
0% {
    transform: scale3d(1, 1, 1)
  }
  30% {
    transform: scale3d(1.25, .75, 1)
  }
  40% {
    transform: scale3d(0.75, 1.25, 1)
  }
  50% {
    transform: scale3d(1.15, .85, 1)
  }
  65% {
    transform: scale3d(.95, 1.05, 1)
  }
  75% {
    transform: scale3d(1.05, .95, 1)
  }
  100% {
    transform: scale3d(1, 1, 1)
  }
}`;

const bigHeight = keyframes`
100%{
  height:25rem;
}
`;

const Ani = {
  fadeIn,
  fadeOut,
  bounceIn,
  rubberBand,
  fadeInOut,
  bigHeight,
};

export default Ani;
