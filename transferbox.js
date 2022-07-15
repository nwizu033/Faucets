const serverUrl = "https://atlnjhpzhxgc.usemoralis.com:2053/server";
        const appId = "RhMyR1ucg4NdA6rSiVCzTclthq4M62xqLR5i5E3c";
        Moralis.start({ serverUrl, appId });
       
         
    async function login() {
        await Moralis.Web3.authenticate().then(res => {
            console.log(res);
            console.log(res["attributes"]["ethAddress"]);
        }).catch(err => {
            console.log(err);
        });
    }

    // login();

   

        


 async function transfer() {
   
    let totalsum= document.getElementById('amount').value;
    let walAdress= document.getElementById('wallAdd').value;
    let selection = document.getElementById('tokenSelect');
    let mainAddress = selection.options[selection.selectedIndex].value;
    
        await Moralis.enableWeb3();
         
    
    //    selection.addEventListener('change',()=>{
    //     mainAddress = selection.options[selection.selectedIndex].value;
    //     // console.log(mainAddress);
    // }); 
        console.log("contract address here");
        console.log(mainAddress);
        let options = {
            type: "erc20",
            amount: Moralis.Units.Token(totalsum, "18"),
            receiver: walAdress,
            contractAddress: mainAddress
        }
    
            await Moralis.transfer(options).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
        }
        
        
        // 0x7CE33c51b8e36AB08BF0083b8C14d9e8Db8aA520
        // 0xa7a0A3a6Ffdb77393A14dbB28A58cFC4B3F1e52a
        // 0x4392FD6D4509678453a521b792A6e369Be8dC0d5
        // 0x97b69407588b4B361ec1366E64Ce85207F454174