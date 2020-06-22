
export const useMicrofrontend = (props,scriptId, callback)=>{
    const { name, host, document } = props;

    const getScript = (scriptId)=>{
        return new Promise((resolve, reject)=>{
            const script = document.createElement('script');
            script.id = scriptId;
            script.crossOrigin = '';
            script.src = `${host}/${name}.js`;
            script.onerror = reject;
            script.onload = resolve;
            document.body.appendChild(script);
        }) ;
    };

    getScript(scriptId)
        .then(()=>{
            callback();
        })    
};