
export const useMicrofrontend = (props,scriptId, callback)=>{
    const { name, host, document, useActions } = props;

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
            return Promise.all(
                useActions.map(useAction=>{
                    console.log(useAction.actionCreator)
                    return import(`Actions/${useAction.actionCreator}`);
                })
            );
        }).then((ActionModules)=>{
            const actions = useActions
                .reduce((newArray, useAction)=>newArray.concat(...useAction.actions),[])
                .reduce((newA, action)=>{
                    ActionModules.forEach((module)=>{
                        if(Object.keys(module).includes(action)){
                            newA[action] = module[action];
                        }
                    });
                    return newA;
                },{})
            callback(actions);
        })
    
};