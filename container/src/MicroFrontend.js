import React, { useEffect } from 'react';
import {useStore} from 'react-redux';
import {useMicrofrontend} from './hooks/useMicroFronted';

const MicroFrontend = props=> {
    const Store = useStore();
    const { name, document, history, window } = props;

    useEffect(()=>{   
        const scriptId = `micro-frontend-script-${name}`;
        if (document.getElementById(scriptId)) {
            renderMicroFrontend();
            return;
        }

        useMicrofrontend(props, scriptId, renderMicroFrontend);
       
        return ()=>{ //ummount
            window[`unmount${name}`](`${name}-container`); 
        }
    },[]);


  const renderMicroFrontend = () => {
    window[`render${name}`](`${name}-container`, history, Store);
  };

  
return <main id={`${name}-container`} style={{display:"block", width:"100%"}}>Loading...</main>;
  
}

MicroFrontend.defaultProps = { // para passar para props as variveis de window
  document,
  window,
};

export default MicroFrontend;
