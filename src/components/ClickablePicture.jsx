import { useState } from 'react';

function ClickablePicture() {
    const pic1 = '/assets/pic1.png';
    const pic2 = '/assets/pic12.png';

    const [clicked, setClicked] = useState(false);

    return (
        <img src={clicked ? pic1 : pic2} alt="Clickable" onClick={() => setClicked(!clicked)} 
        style={{ cursor: 'pointer', width: '150px'}} />
    );
}


export default ClickablePicture;

    