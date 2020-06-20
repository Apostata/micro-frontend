import React, { useEffect } from 'react';
import {useStore} from 'react-redux'
import axios from 'axios'

const MicroFrontend = props=> {
    const Store = useStore();
    const { name, host, document, history, window } = props;

    useEffect(()=>{   
        const scriptId = `micro-frontend-script-${name}`;
        if (document.getElementById(scriptId)) {
            renderMicroFrontend();
            return;
        }

        axios.get(`${host}/${name}.js`)
        .then(() => {
            return new Promise((resolve, reject)=>{
                const script = document.createElement('script');
                script.id = scriptId;
                script.crossOrigin = '';
                script.src = `${host}/${name}.js`;
                script.onerror= reject;
                script.onload = resolve;
                document.head.appendChild(script);
            })            
        }).then(()=>{
            renderMicroFrontend();
        })


        return ()=>{ //ummount
            window[`unmount${name}`](`${name}-container`); 
        }
    },[]);


  const renderMicroFrontend = () => {
    window[`render${name}`](`${name}-container`, history, Store);
  };

  
return <main id={`${name}-container`} />;
  
}

MicroFrontend.defaultProps = {
  document,
  window,
};

export default MicroFrontend;
