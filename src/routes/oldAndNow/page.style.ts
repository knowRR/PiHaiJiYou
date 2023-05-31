import { css } from '../../stitches'
import taiwan from '../../assets/taiwan.png';

export const main = css({
    // backgroundColor: '#F7EAD9',
    display: 'flex',
    width: '90%',
    height: '90vh',
    // justifyContent: 'space-between',
    margin: '20px auto',
}).toString();

export const top = css({
    display: 'flex',
    marginTop: '20px',
    justifyContent: 'space-between'
}).toString();

export const buttons = css({
    flex: '0 0 200px',
    padding: '20px 10px',
    backgroundColor: '#E7D6B1',
    margin: '20px 50px',
    borderRadius: '10px',
    height: '430px',
    overflow: 'auto',
    opacity: '0.9',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
        display: 'none'
    }
}).toString();

export const button = css({
    display: 'block',
    padding: '10px 15px',
    border: 'none',
    backgroundColor: '#4D2714',
    color: 'white',
    borderRadius: '10px',
    margin: '10px auto',
    fontSize: '16px',
    userSelect: 'none'
}).toString();

export const mapCss = css({
    // marginTop: '30px',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + taiwan + ')',
    width: '300px',
    height: '530px',
    marginRight: '60px',
    position: 'relative'
}).toString();

export const Blocks = css({
    flex: '0 0 400px',
    height: 'auto',
    marginTop: '40px',
    overflow: 'auto',
    marginLeft: '100px'
}).toString();

export const Block = css({
    border: '3px #4D2714 solid',
    backgroundColor: 'White',
    height: '240px',
    borderRadius: '10px',
    wordBreak: 'break-all',
    padding: '10px',
    overflowY: 'scroll',
    // MsOverflowStyle: 'none',  /* IE and Edge */
  	// scrollbarWidth: 'none',     /* Firefox */
    '&::-webkit-scrollbar': {
        display: 'none'
    }
}).toString();

export const talkBlock = css({
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    marginLeft: '50px'
    // paddingBottom: '10px'
}).toString();

export const faceCss = css({
    width: '120px',
    objectFit: 'cover'
}).toString();

export const talkCss = css({
    // border: '3px black solid',
    fontFamily: 'KouzanMouhituFontOTF',
    backgroundColor: '#F2DCAB',
    border: '6px double #4D2714',
    height: '120px',
    width: '85%',
    borderRadius: '10px',
    wordBreak: 'break-all',
    padding: '10px',
    // marginRight: '100px',
    marginTop: '15px',
}).toString();
