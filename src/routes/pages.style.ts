import { css } from '../stitches'

export const main = css({
    // backgroundColor: '#F7EAD9',
    display: 'flex',
    // width: '90%',
    // height: '90vh',
    justifyContent: 'center',
    marginTop: '180px',
    gap: '60px'
}).toString();

export const img = css({
    width: '180px',
    height: '400px'
}).toString();

export const talkCss = css({
    // border: '3px black solid',
    backgroundColor: '#F2DCAB',
    border: '6px double #4D2714',
    height: '180px',
    width: '28%',
    borderRadius: '10px',
    wordBreak: 'break-all',
    padding: '20px',
    // marginRight: '100px',
    marginTop: '80px',
    // fontFamily: 'KouzanMouhituFont',
    // '@font-face': {
    //     fontFamily: "KouzanMouhituFont",
    //     src: `url("../assets/KouzanMouhituFont.woff2") format("woff2")`
    // },
    fontSize: '16px',
    fontWeight: '550'
    }).toString();
    
export const title = css({
    fontFamily: 'KouzanMouhituFont',
    writingMode: 'vertical-lr',
    position: 'absolute',
    right: '50px',
    top: '50px',
    color: '#4D2714',
    userSelect: 'none',
    fontSize: '80px'
}).toString();

export const link = css({
    // fontFamily: 'KouzanMouhituFont',
    fontSize: '40px',
    userSelect: 'none',
    textDecoration: 'none',
    color: '#4D2714',
    position: 'absolute',
    right: '350px',
    bottom: '200px',
}).toString();

export const linkWord = css({
    fontFamily: 'KouzanMouhituFont',
}).toString();