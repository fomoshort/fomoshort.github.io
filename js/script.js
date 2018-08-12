const math = function() {
  function toFixed(x) {
    if (Math.abs(x) < 1.0) {
      var e = parseInt(x.toString().split('e-')[1]);
      if (e) {
          x *= Math.pow(10,e-1);
          x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
      }
    } else {
      var e = parseInt(x.toString().split('+')[1]);
      if (e > 20) {
          e -= 20;
          x /= Math.pow(10,e);
          x += (new Array(e+1)).join('0');
      }
    }
    return x.toString().split(".")[0];
  }
  return {toFixed};
}();	
const tx = function() {
  function sendTransaction(tx) {
    return new Promise((resolve,reject) => {
      web3.eth.sendTransaction(tx, function(err, val) {
        if(!err) {
          resolve(val);
        } else {
           reject(err);
           }  
      });
    });
  }
  return { sendTransaction }
}();
const playerbookObject = function() {
  let playerbook = { address:'0xa03887507b97f05dfba78fc78adb830040a26c2f', abi:JSON.parse('[{"constant":false,"inputs":[],"name":"addMeToAllGames","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"pIDxAddr_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"registrationFee_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNameFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"}],"name":"plyrNames_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"gameNames_","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"pIDxName_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"address"},{"name":"_all","type":"bool"}],"name":"registerNameXaddr","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_gameAddress","type":"address"},{"name":"_gameNameStr","type":"string"}],"name":"addGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"pID_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pID","type":"uint256"}],"name":"getPlayerAddr","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"bytes32"},{"name":"_all","type":"bool"}],"name":"registerNameXname","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_nameStr","type":"string"}],"name":"checkIfNameValid","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_name","type":"bytes32"},{"name":"_affCode","type":"bytes32"},{"name":"_all","type":"bool"}],"name":"registerNameXnameFromDapp","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_gameID","type":"uint256"}],"name":"addMeToGame","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_pID","type":"uint256"}],"name":"getPlayerName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"uint256"},{"name":"_all","type":"bool"}],"name":"registerNameXID","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"plyrNameList_","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_name","type":"bytes32"},{"name":"_affCode","type":"address"},{"name":"_all","type":"bool"}],"name":"registerNameXaddrFromDapp","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"}],"name":"useMyOldName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"gID_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"},{"name":"_name","type":"bytes32"},{"name":"_affCode","type":"uint256"},{"name":"_all","type":"bool"}],"name":"registerNameXIDFromDapp","outputs":[{"name":"","type":"bool"},{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_fee","type":"uint256"}],"name":"setRegistrationFee","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"games_","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"gameIDs_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"plyr_","outputs":[{"name":"addr","type":"address"},{"name":"name","type":"bytes32"},{"name":"laff","type":"uint256"},{"name":"names","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pID","type":"uint256"}],"name":"getPlayerLAff","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"getPlayerID","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"playerID","type":"uint256"},{"indexed":true,"name":"playerAddress","type":"address"},{"indexed":true,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"isNewPlayer","type":"bool"},{"indexed":false,"name":"affiliateID","type":"uint256"},{"indexed":false,"name":"affiliateAddress","type":"address"},{"indexed":false,"name":"affiliateName","type":"bytes32"},{"indexed":false,"name":"amountPaid","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onNewName","type":"event"}]') };	
  function getPlayerName(id) {
    return new Promise((resolve, reject) => {
      let playerbookContract = web3.eth.contract(playerbook.abi).at(playerbook.address);	    
      playerbookContract.getPlayerName.call(id, function(err, result) {
	if(!err) {
	  resolve("https://fomoshort.github.io/" + web3.toAscii(result).replace(/\s/g, ''));		
        }	       
        else { reject(err) }      
      });	      
    });	    
  } 
  function getPID() {
    return new Promise((resolve, reject) => {
      let userAddress = localStorage.getItem("userAddress");	    
      let playerbookContract = web3.eth.contract(playerbook.abi).at(playerbook.address);	    
      playerbookContract.pIDxAddr_.call(userAddress, function(err, result) {
	if(!err) { resolve(result) }
        else { reject(err) }      
      });	      
    });	    
  } 	
  return { getPID, getPlayerName };  	
};
const hourglassObject = function() {
  let hourglass = { address:'0x4134479f7d4cfff53be4272efc6c420d5ddd32b6', abi:JSON.parse('[{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"dividendsOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ethereumToSpend","type":"uint256"}],"name":"calculateTokensReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokensToSell","type":"uint256"}],"name":"calculateEthereumReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"administrators","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakingRequirement","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_includeReferralBonus","type":"bool"}],"name":"myDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthereumBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"setStakingRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_identifier","type":"bytes32"},{"name":"_status","type":"bool"}],"name":"setAdministrator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_toAddress","type":"address"},{"name":"_amountOfTokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_symbol","type":"string"}],"name":"setSymbol","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_referredByID","type":"uint256"}],"name":"buy","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"reinvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"incomingEthereum","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"},{"indexed":true,"name":"referredBy","type":"address"}],"name":"onTokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"tokensBurned","type":"uint256"},{"indexed":false,"name":"ethereumEarned","type":"uint256"}],"name":"onTokenSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumReinvested","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"}],"name":"onReinvestment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumWithdrawn","type":"uint256"}],"name":"onWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"}]') };
  function getDividends() {
    return new Promise((resolve, reject) => {
      let userAddress = localStorage.getItem("userAddress");	    
      let hourglassContract = web3.eth.contract(hourglass.abi).at(hourglass.address);	    
      hourglassContract.dividendsOf.call(userAddress, function(err, result) {
	if(!err) { resolve(result) }
        else { reject(err) }      
      });	      
    });	    
  }	
  function getBalance() {
    return new Promise((resolve, reject) => {
      let userAddress = localStorage.getItem("userAddress");	    
      let hourglassContract = web3.eth.contract(hourglass.abi).at(hourglass.address);	    
      hourglassContract.balanceOf.call(userAddress, function(err, result) {
	if(!err) { resolve(result) }
        else { reject(err) }      
      });	      
    });	    
  }		
  function getSellPrice() {
    return new Promise((resolve, reject) => {
      let hourglassContract = web3.eth.contract(hourglass.abi).at(hourglass.address);	    
      hourglassContract.sellPrice.call(function(err, result) {
	if(!err) { resolve(result) }
        else { reject(err) }      
      });	      
    });	    
  }	
  function getBuyPrice() {
    return new Promise((resolve, reject) => {
      let hourglassContract = web3.eth.contract(hourglass.abi).at(hourglass.address);	    
      hourglassContract.buyPrice.call(function(err, result) {
	if(!err) { resolve(result) }
        else { reject(err) }      
      });	      
    });	    
  }	
  async function sellTokens(amount) {
    let userAddress = localStorage.getItem("userAddress");
    let hourglassContract = web3.eth.contract(hourglass.abi).at(hourglass.address);	    
    let data = hourglassContract.sell.getData(math.toFixed(parseFloat(new BigNumber(amount).multipliedBy(Math.pow(10,18)))));
    await tx.sendTransaction({from:userAddress, to:hourglass.address, data:data});	  
  }	
  async function buyTokens(amount) {
    let userAddress = localStorage.getItem("userAddress");
    let p3dRefferal = localStorage.getItem("p3dReferral");	  
    if(!p3dRefferal) { p3dRefferal = "0x0000000000000000000000000000000000000000" };
    let hourglassContract = web3.eth.contract(hourglass.abi).at(hourglass.address);	    
    let data = hourglassContract.buy.getData(p3dRefferal);
    let keyPrice = new BigNumber(await getBuyPrice());	   
    let value = math.toFixed(parseFloat(amount*keyPrice));	  
    await tx.sendTransaction({from:userAddress, to:hourglass.address, data:data, value:value});	  
  }
  async function withdraw() {
    let userAddress = localStorage.getItem("userAddress");
    let hourglassContract = web3.eth.contract(hourglass.abi).at(hourglass.address);	    
    let data = hourglassContract.withdraw.getData();
    await tx.sendTransaction({from:userAddress, to:hourglass.address, data:data});	  
  }
  async function reinvest() {
    let userAddress = localStorage.getItem("userAddress");
    let hourglassContract = web3.eth.contract(hourglass.abi).at(hourglass.address);	    
    let data = hourglassContract.reinvest.getData();
    await tx.sendTransaction({from:userAddress, to:hourglass.address, data:data});	  
  }	
  return {getSellPrice, getBuyPrice, getDividends, getBalance, sellTokens, buyTokens, withdraw, reinvest};			     
}();	
const gameObject = function(_gameSettings) {
  let gameSettings = _gameSettings;
  function getBuyPrice() {
    return new Promise((resolve, reject) => {
      let gameContract = web3.eth.contract(gameSettings.abi).at(gameSettings.address);
      gameContract.getBuyPrice.call(function(err, result) {	    
        if(!err) {
          resolve(result);
	} else {
	    reject(err);
	}
      });
    });
  }	  
  function getCurrentRoundInfo() {
    return new Promise((resolve, reject) => {
      let gameContract = web3.eth.contract(gameSettings.abi).at(gameSettings.address);
      gameContract.getCurrentRoundInfo.call(function(err, result) {
        if(!err) {
          resolve(result);
	} else {
	    reject(err);
	}
      });
    });
  }		
  function getTimeLeft() {
    return new Promise((resolve, reject) => {
      let gameContract = web3.eth.contract(gameSettings.abi).at(gameSettings.address);
      gameContract.getTimeLeft.call(function(err, result) {
        if(!err) {
          resolve(result);
	} else {
	    reject(err);
	}
      });
    });
  }	  
  function getPlayerVaults(id) {
    return new Promise((resolve, reject) => {
      let gameContract = web3.eth.contract(gameSettings.abi).at(gameSettings.address);
      gameContract.getPlayerVaults.call(id, function(err, result) {
        if(!err) {
          resolve(result);
	} else {
	    reject(err);
	}
      });
    });
  }	

  function getPlayerID(userAddress) {
    return new Promise((resolve,reject) => {
      let gameContract = web3.eth.contract(gameSettings.abi).at(gameSettings.address);
      gameContract.pIDxAddr_(userAddress, function(err, result) {
	if(!err) {
	  resolve(result);
	} else {
	    reject(err);	
	  }	
      });	      
    });	      
  }	  
	
  function getRound(id) {
    return new Promise((resolve, reject) => {
      let gameContract = web3.eth.contract(gameSettings.abi).at(gameSettings.address);
      gameContract.round_(id, function(err, result) {
        if(!err) {
          resolve(result);
	} else {
	    reject(err);
	}
      });
    });
  }	
  function getCurrentRoundID() {
    return new Promise((resolve, reject) => {
      let gameContract = web3.eth.contract(gameSettings.abi).at(gameSettings.address);
      gameContract.rID_(function(err, result) {
        if(!err) {
          resolve(result);
	} else {
	    reject(err);
	}
      });
    });
  }		
  function getPlayerInfo() {
    return new Promise((resolve, reject) => {
      let userAddress = localStorage.getItem("userAddress");	    
      let gameContract = web3.eth.contract(gameSettings.abi).at(gameSettings.address);
      gameContract.getPlayerInfoByAddress.call(userAddress, function(err, result) {
        if(!err) {
          resolve(result);
	} else {
	    reject(err);
	}
      });
    });
  }	  
  function getKeysPrice(_amount) {
    return new Promise((resolve, reject) => {
      let gameContract = web3.eth.contract(gameSettings.abi).at(gameSettings.address);
      gameContract.iWantXKeys.call(_amount, function(err, result) {
	if(!err) {
	  resolve(result);	
	}  else {
	     reject(err);	
	  }	
      });	      
    });	    
  }

  async function getVault() {
    let userAddress = localStorage.getItem("userAddress");
    let id = await getPlayerID(userAddress);
    let vaults = await getPlayerVaults(id);	  
    return vaults;
  }
	
  async function withdraw() {
    let userAddress = localStorage.getItem("userAddress");
    let gameContract = web3.eth.contract(gameSettings.abi).at(gameSettings.address);
    let data = gameContract.withdraw.getData();
    await tx.sendTransaction({ from:userAddress, to:gameSettings.address, data:data});
  }
  async function buyKeys(_amount) {
    let userAddress = localStorage.getItem("userAddress");
    let team = gameSettings.name === "fomoShort" ? localStorage.getItem("team") : localStorage.getItem("team-quick");
    let masternode = JSON.parse(localStorage.getItem("masternode"));
    let gameContract = web3.eth.contract(gameSettings.abi).at(gameSettings.address);   
    let _affcode, data;
    if(masternode.type.name && masternode.type.value) {
        _affcode = masternode.type.name;
        data = gameContract.buyXname.getData(_affcode, team);
    } else if(masternode.type.id && masternode.type.value) {
        _affcode = masternode.type.id;
        data = gameContract.buyXid.getData(_affcode, team);
    } else if(masternode.type.address && masternode.type.value) {
        _affcode = masternode.type.address;
        data = gameContract.buyXaddr.getData(_affcode, team);
    } else {
        _affcode = "0x0000000000000000000000000000000000000000";
        data = gameContract.buyXaddr.getData(_affcode, team);
    }
    let amount = math.toFixed(new BigNumber(_amount).multipliedBy(Math.pow(10,18)));
    let value =  math.toFixed(parseFloat(await getKeysPrice(amount)));	
    await tx.sendTransaction({from:userAddress, to:gameContract.address, data:data, value:value});
  }
  async function reinvestBuy(_amount) {
    let userAddress = localStorage.getItem("userAddress");
    let team = gameSettings.name === "fomoShort" ? localStorage.getItem("team") : localStorage.getItem("team-quick");
    let keyPrice = localStorage.getItem("keyPrice");
    let masternode = JSON.parse(localStorage.getItem("masternode"));
    let amount = math.toFixed(new BigNumber(_amount).multipliedBy(Math.pow(10,18)));
    let value =  math.toFixed(await getKeysPrice(amount));		  
    let gameContract = web3.eth.contract(gameSettings.abi).at(gameSettings.address);   
    let _affcode, data;
    if(masternode.type.name && masternode.type.value) {
        _affcode = masternode.type.name;
        data = gameContract.reLoadXname.getData(_affcode, team, value);
    } else if(masternode.type.id && masternode.type.value) {
        _affcode = masternode.type.id;
        data = gameContract.reLoadXid.getData(_affcode, team, value);
    } else if(masternode.type.address && masternode.type.value) {
        _affcode = masternode.type.address;
        data = gameContract.reLoadXaddr.getData(_affcode, team, value);
    } else {
        _affcode = "0x0000000000000000000000000000000000000000";
        data = gameContract.reLoadXaddr.getData(_affcode, team, value);
    } 
    await tx.sendTransaction({from:userAddress, to:gameContract.address, data:data});
  }	
  async function registerName(_name) {
    console.log(_name);	  
    let userAddress = localStorage.getItem("userAddress");
    let team = gameSettings.name === "fomoShort" ? localStorage.getItem("team") : localStorage.getItem("team-quick");
    let masternode = JSON.parse(localStorage.getItem("masternode"));
    let gameContract = web3.eth.contract(gameSettings.abi).at(gameSettings.address);   
    let name = _name;	
    let _affcode, data;
    if(masternode.type.name && masternode.type.value) {
        _affcode = masternode.type.name;
        data = gameContract.registerNameXname.getData(name, _affcode, false);
    } else if(masternode.type.id && masternode.type.value) {
        _affcode = masternode.type.id;
        data = gameContract.registerNameXid.getData(name, _affcode, false);
    } else if(masternode.type.address && masternode.type.value) {
        _affcode = masternode.type.address;
        data = gameContract.registerNameXaddr.getData(name, _affcode, false);
    } else {
        _affcode = "0x0000000000000000000000000000000000000000";
        data = gameContract.registerNameXaddr.getData(name, _affcode, false);
    }	    
    let value = math.toFixed(1e16);	
    await tx.sendTransaction({from:userAddress, to:gameContract.address, data:data, value:value});	  
  }	  
  return {getBuyPrice, getTimeLeft,getCurrentRoundInfo, getRound, getPlayerInfo, getCurrentRoundID, getVault, withdraw, buyKeys, reinvestBuy, registerName};  
};
const main = function() {
  async function updateVault(object) {
    setInterval(async function() {
      object.name === "fomoShort" ? (fomoShortVault = await object.getVault(),
      $('#fomoShortGameEarnings').text((parseInt(fomoShortVault[0])/1e18).toFixed(4)), $('#fomoShortEarnings').text((parseInt(fomoShortVault[0])/1e18).toFixed(4)),
      $('#fomoShortGameWinnings').text((parseInt(fomoShortVault[1])/1e18).toFixed(4)), $('#fomoShortAffiliateEarnings').text(fomoShortVault[2])) :
      (fomoQuickVault = await object.getVault(),
      $('#fomoQuickGameEarnings').text(fomoQuickVault[0]),
      $('#fomoQuickEarnings').text(fomoQuickVault[0]),  
      $('#fomoQuickGameWinnings').text(fomoQuickVault[1]),
      $('#fomoQuickAffiliateEarnings').text(fomoQuickVault[2])); 
    }, 3000);	    
  }	
  async function updateRoundInfo(object) {
    setInterval(async function() {
      object.name === "fomoShort" ? (fomoShortRoundID = await object.getCurrentRoundID(),
      $('#fomoShortRoundNumber').text(fomoShortRoundID), 
      fomoShortRoundInfo = await object.getRound(fomoShortRoundID),
      $('#fomoShortTotalInvested').text((parseInt(fomoShortRoundInfo[6])/1e18).toFixed(4)),
      $('#fomoShortKeys').text((parseInt(fomoShortRoundInfo[5])/1e18).toFixed(4)),
      $('#fomoShortTimePurchased').text((parseInt(parseInt(fomoShortRoundInfo[5])/1e18)*30)/60),			     
      $('#fomoShortActivePot').text((parseInt(fomoShortRoundInfo[7])/1e18).toFixed(4)),
      $('#fomoShortVolume').text((parseInt(fomoShortRoundInfo[7])/1e18).toFixed(4)),
      $('#fomoShortDistributedRewards').text((parseInt(fomoShortRoundInfo[8])/1e18).toFixed(4))) :
      (fomoQuickRoundID = await object.getCurrentRoundID(),
      $('#fomoQuickRoundNumber').text(fomoQuickRoundID),
      fomoQuickRoundInfo = await object.getRound(fomoQuickRoundID),
      $('#fomoQuickTotalInvested').text((parseInt(fomoQuickRoundInfo[6])/1e18).toFixed(4)),				     
      $('#fomoQuickKeys').text((parseInt(fomoQuickRoundInfo[5])/1e18).toFixed(4)),
      $('#fomoQuickTimePurchased').text((parseInt(fomoShortRoundInfo[5])*10)/(60*60)), 
      $('#fomoQuickActivePot').text((parseInt(fomoQuickRoundInfo[7])/1e18).toFixed(4)),
      $('#fomoQuickVolume').text((parseInt(fomoQuickRoundInfo[7])/1e18).toFixed(4)),
      $('#fomoQuickDistributedRewards').text((parseInt(fomoQuickRoundInfo[8])/1e18).toFixed(4)));				     
    }, 3000);
  }	  
  async function updatePlayerInfo(object) {
    setInterval(async function() {
      object.name === "fomoShort" ? (playerInfo = await object.getPlayerInfo(), $('#fomoShortPlayerKeys').text(playerInfo[5])) :
      (playerInfo = await object.getPlayerInfo(), $('#fomoQuickPlayerKeys').text(playerInfo[5]));
    }, 3000);	    
  }	  
  async function updateBuyPrice(object) {
    setInterval(async function() {	    
      object.name === "fomoShort" ? (fomoShortKeysPrice = await object.getBuyPrice(), 
      $('#fomoShortKeysPrice').text(fomoShortKeysPrice/1e18)) :
      (fomoQuickKeysPrice = await object.getBuyPrice(),
      $('#fomoQuickKeysPrice').text(fomoQuickKeysPrice/1e18));
    }, 3000);	    
  }
  async function returnDateString(object) {
    let timeLeft = parseInt(await object.getTimeLeft()); 
    let date = new Date(timeLeft*1000);
    let hours = date.getHours();
    hours = ("0" + hours).slice(-2);	  
    let minutes = date.getMinutes();
    minutes = ("0" + minutes).slice(-2);	  
    let seconds = date.getSeconds();
    seconds = ("0" + seconds).slice(-2);	  
    return hours.toString() + " : " + minutes.toString() + " : " + seconds.toString();
  }	  
  async function updatedTimer(object) {
    let roundObject = await object.getCurrentRoundInfo();
    let timeLeft = (parseInt(roundObject[3])*1000) - Date.now();	     
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    hours = ("0" + hours).slice(-2);	  
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    minutes = ("0" + minutes).slice(-2);	  
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);	 	  
    seconds = ("0" + seconds).slice(-2);	  
    return hours + " : " + minutes + " : " + seconds;
  }	  
  async function updateTime(object) {
    setInterval(async function() {
      object.name === "fomoShort" ? (dateString = await updatedTimer(object),
      $('#fomoShortTimeLeft').text(dateString),
      $('#hms_timer2').text(dateString)) :	
      (dateString = await updatedTimer(object), $('#fomoQuickTimeLeft').text(dateString),
      $('body > div.container.main_section > div:nth-child(2) > div > p.style.colorDefinition.size_lg').text(dateString)); 	    
    }, 1000);	    
  }
  async function initSingleBuyButton(object) {
    object.name === "fomoShort" ? 	  
    ($('#fomoShortSingleBuyButton').on('click', async function() {
      await object.buyKeys(1);	    
    })) :
    ($('#fomoQuickSingleBuyButton').on('click', async function() {
      await object.buyKeys(1);	    
    }));    
  };		
  async function initBuyButton(object) {
    object.name === "fomoShort" ? 	  
    ($('#fomoShortBuyButton').on('click', async function() {
      console.log($('#fomoShortBuyAmount').val()),
      await object.buyKeys($('#fomoShortBuyAmount').val());	    
    })) :
    ($('#fomoQuickBuyButton').on('click', async function() {
      await object.buyKeys($('#fomoQuickBuyAmount').val());	    
    }));    
  };	
  async function initReinvestButton(object) {
    object.name === "fomoShort" ? 	  
    ($('#fomoShortReinvestButton').on('click', async function() {
      await object.reinvestBuy(parseInt($('#fomoShortBuyAmount').val()));	    
    })) :
    ($('#fomoQuickReinvestButton').on('click', async function() {
      await object.reinvestBuy(parseInt($('#fomoQuickBuyAmount').val()));	    
    }))
  };		
  async function initWithdrawButton(object) {
    object.name === "fomoShort" ? 	  
    ($('#fomoShortWithdrawDividends').on('click', async function() {
      await object.withdraw();	    
    })) :
    ($('#fomoQuickWithdrawDividends').on('click', async function() {
      await object.withdraw();	    
    }))
  };	
  async function updateHourGlassInfo() {
    setInterval(async function() {
      let p3dAmount = (parseFloat(await hourglassObject.getBalance())/1e18).toFixed(4);	    
      let p3dDividends = (parseFloat(await hourglassObject.getDividends())/1e18).toFixed(4);
      $('#p3dAmount').text(p3dAmount + " P3D");
      $('#p3dDividends').text(p3dDividends + " ETH");	    
    }, 1000);
  };	
  async function updateHourGlassBuyPrice() {
    setInterval(async function() {
      let buyPrice = parseInt(await hourglassObject.getBuyPrice())/1e18;	    
      $('#hourglassBuyPrice').text(buyPrice.toString() + " ETH");
    }, 1000);
  };	
  async function updateHourGlassSellPrice() {
    setInterval(async function() {
      let sellPrice = parseInt(await hourglassObject.getSellPrice())/1e18;	    
      $('#hourglassSellPrice').text(sellPrice.toString() + " ETH");
    }, 1000);
  };
  async function initHourGlassBuyButton() {
    $('#hourglassBuyButton').on('click', async function() {
      await hourglassObject.buyTokens($('#buy_p3d > div.input-group.custom_group > input').val());	    
    });	  
  };	
  async function initHourGlassSellButton() {
    $('#hourglassSellButton').on('click', async function() {
      await hourglassObject.sellTokens($('#sell_p3d > div.input-group.custom_group > input').val());	    
    });	  
  };	
  async function initHourGlassWithdrawButton() {
    $('#hourglassWithdrawButton').on('click', async function() {
      await hourglassObject.withdraw();	    
    });	  
  };
  async function initHourGlassReinvestButton() {
    $('#hourglassReinvest').on('click', async function() {
      await hourglassObject.reinvest();	    
    });	  
  };	
  function initFomoQuickTeamSelector() {
    $('#tab1-2 > div.teamSec > ul > li').on('click', function(e) {
      $('.active2').removeClass("active2");    	      
      $(e.currentTarget).addClass("active2");
      localStorage.setItem("team-quick", $(e.currentTarget).attr("team-quick"));  	    
    });	      
  }	
  function initFomoShortTeamSelector() {
    $('#tab1 > div.teamSec > ul > li').on('click', function(e) {
      $('.active').removeClass("active");    	      
      $(e.currentTarget).addClass("active");
      localStorage.setItem("team", $(e.currentTarget).attr("team"));  	    
    });	     
  }	
  function initTeamQuickHighlighter() {
      let teamNumber = localStorage.getItem("team-quick");	    
      $("li[team-quick='" + teamNumber + "']").addClass("active");
  }	
  function initTeamShortHighlighter() {
      let teamNumber = localStorage.getItem("team");	    
      $("li[team='" + teamNumber + "']").addClass("active");
  }	  
  function initFomoQuickBuyAmountIncrementor() {
    $('#fomoQuickButtons > ul > li').on('click', function(e) {   
      $('#fomoQuickBuyAmount').val(parseInt($('#fomoQuickBuyAmount').val()) + parseInt($(e.currentTarget).children('a').attr('value')));
    });	     
  }	
  function initFomoShortBuyAmountIncrementor() {
    $('#fomoShortButtons > ul > li').on('click', function(e) {    	      
      $('#fomoShortBuyAmount').val(parseInt($('#fomoShortBuyAmount').val()) + parseInt($(e.currentTarget).children('a').attr('value')));
    });	     
  }		
  async function initRegisterNameButton(object) {
    $('#registerNameButton').on('click', async function() {
      await object.registerName($('#registerNameInput').val());	   
    });	    
  }	
  async function loadAffiliateName() {
    let playerbook = playerbookObject();	  
    let playerID = await playerbook.getPID();	  
    let playerName = await playerbook.getPlayerName(playerID);	  
    $('#fomoShortRefLink').text(playerName);
  }	  
  async function initHourGlass() {
    await updateHourGlassInfo();	  
    await updateHourGlassBuyPrice();
    await updateHourGlassSellPrice(); 
    await initHourGlassBuyButton();
    await initHourGlassSellButton();
    await initHourGlassWithdrawButton();	  
    await initHourGlassReinvestButton();	  
  }	
  async function initGame(object) {
    await updateRoundInfo(object);	  
    await updatePlayerInfo(object);	  
    await updateVault(object);	  
    await updateBuyPrice(object);
    await updateTime(object);	 
    await initSingleBuyButton(object);	  
    await initBuyButton(object);
    await initReinvestButton(object);	  
    await initWithdrawButton(object);	  
  }	
  async function initFomoShort() {
    initTeamShortHighlighter();	  
    initFomoShortBuyAmountIncrementor();
    initFomoShortTeamSelector();	  	  
    let fomoShortSettings = { address:'0x7c5c7812a793ab63fbdc983ef4144be745113d0f', abi:JSON.parse('[{"constant":true,"inputs":[],"name":"getBuyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"bytes32"},{"name":"_team","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"reLoadXname","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"activate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"pIDxAddr_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"round_","outputs":[{"name":"plyr","type":"uint256"},{"name":"team","type":"uint256"},{"name":"end","type":"uint256"},{"name":"ended","type":"bool"},{"name":"strt","type":"uint256"},{"name":"keys","type":"uint256"},{"name":"eth","type":"uint256"},{"name":"pot","type":"uint256"},{"name":"mask","type":"uint256"},{"name":"ico","type":"uint256"},{"name":"icoGen","type":"uint256"},{"name":"icoAvg","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"}],"name":"plyrNames_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"fees_","outputs":[{"name":"gen","type":"uint256"},{"name":"p3d","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"pIDxName_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"uint256"},{"name":"_team","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"reLoadXid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"address"},{"name":"_all","type":"bool"}],"name":"registerNameXaddr","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_pID","type":"uint256"},{"name":"_addr","type":"address"},{"name":"_name","type":"bytes32"},{"name":"_laff","type":"uint256"}],"name":"receivePlayerInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"rndTmEth_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rID_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pID","type":"uint256"}],"name":"getPlayerVaults","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"bytes32"},{"name":"_all","type":"bool"}],"name":"registerNameXname","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentRoundInfo","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"address"},{"name":"_team","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"reLoadXaddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"uint256"},{"name":"_team","type":"uint256"}],"name":"buyXid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_pID","type":"uint256"},{"name":"_name","type":"bytes32"}],"name":"receivePlayerNameList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"uint256"},{"name":"_all","type":"bool"}],"name":"registerNameXID","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"address"},{"name":"_team","type":"uint256"}],"name":"buyXaddr","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"plyrRnds_","outputs":[{"name":"eth","type":"uint256"},{"name":"keys","type":"uint256"},{"name":"mask","type":"uint256"},{"name":"ico","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"bytes32"},{"name":"_team","type":"uint256"}],"name":"buyXname","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_otherF3D","type":"address"}],"name":"setOtherFomo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"potSplit_","outputs":[{"name":"gen","type":"uint256"},{"name":"p3d","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTimeLeft","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_rID","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"calcKeysReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_keys","type":"uint256"}],"name":"iWantXKeys","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"activated_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"plyr_","outputs":[{"name":"addr","type":"address"},{"name":"name","type":"bytes32"},{"name":"win","type":"uint256"},{"name":"gen","type":"uint256"},{"name":"aff","type":"uint256"},{"name":"lrnd","type":"uint256"},{"name":"laff","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"potSwap","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getPlayerInfoByAddress","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"playerID","type":"uint256"},{"indexed":true,"name":"playerAddress","type":"address"},{"indexed":true,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"isNewPlayer","type":"bool"},{"indexed":false,"name":"affiliateID","type":"uint256"},{"indexed":false,"name":"affiliateAddress","type":"address"},{"indexed":false,"name":"affiliateName","type":"bytes32"},{"indexed":false,"name":"amountPaid","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onNewName","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"ethIn","type":"uint256"},{"indexed":false,"name":"keysBought","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"},{"indexed":false,"name":"potAmount","type":"uint256"}],"name":"onEndTx","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"playerID","type":"uint256"},{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethOut","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethOut","type":"uint256"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onWithdrawAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethIn","type":"uint256"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onBuyAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onReLoadAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"affiliateID","type":"uint256"},{"indexed":false,"name":"affiliateAddress","type":"address"},{"indexed":false,"name":"affiliateName","type":"bytes32"},{"indexed":true,"name":"roundID","type":"uint256"},{"indexed":true,"name":"buyerID","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onAffiliatePayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"roundID","type":"uint256"},{"indexed":false,"name":"amountAddedToPot","type":"uint256"}],"name":"onPotSwapDeposit","type":"event"}]') };	
    fomoShortSettings['name'] = "fomoShort"; 	  
    let object = gameObject(fomoShortSettings);
    object['name'] = "fomoShort";	  
    let fomoShort = object;
    await initRegisterNameButton(fomoShort);	  
    await initGame(fomoShort);
  }	
  async function initFomoQuick() {
    initTeamQuickHighlighter();	  
    initFomoQuickBuyAmountIncrementor();
    initFomoQuickTeamSelector();
    let fomoQuickSettings = { address:'0xc3966827112295270Aa8879106182F5386c0b008', abi:JSON.parse('[{"constant":true,"inputs":[],"name":"getBuyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"bytes32"},{"name":"_team","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"reLoadXname","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"activate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"pIDxAddr_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"round_","outputs":[{"name":"plyr","type":"uint256"},{"name":"team","type":"uint256"},{"name":"end","type":"uint256"},{"name":"ended","type":"bool"},{"name":"strt","type":"uint256"},{"name":"keys","type":"uint256"},{"name":"eth","type":"uint256"},{"name":"pot","type":"uint256"},{"name":"mask","type":"uint256"},{"name":"ico","type":"uint256"},{"name":"icoGen","type":"uint256"},{"name":"icoAvg","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"}],"name":"plyrNames_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"fees_","outputs":[{"name":"gen","type":"uint256"},{"name":"p3d","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"pIDxName_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"uint256"},{"name":"_team","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"reLoadXid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"address"},{"name":"_all","type":"bool"}],"name":"registerNameXaddr","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_pID","type":"uint256"},{"name":"_addr","type":"address"},{"name":"_name","type":"bytes32"},{"name":"_laff","type":"uint256"}],"name":"receivePlayerInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"rndTmEth_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rID_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pID","type":"uint256"}],"name":"getPlayerVaults","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"bytes32"},{"name":"_all","type":"bool"}],"name":"registerNameXname","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentRoundInfo","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pID","type":"uint256"},{"name":"_rID","type":"uint256"}],"name":"calcPlayerICOPhaseKeys","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"address"},{"name":"_team","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"reLoadXaddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"uint256"},{"name":"_team","type":"uint256"}],"name":"buyXid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_pID","type":"uint256"},{"name":"_name","type":"bytes32"}],"name":"receivePlayerNameList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"uint256"},{"name":"_all","type":"bool"}],"name":"registerNameXID","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"address"},{"name":"_team","type":"uint256"}],"name":"buyXaddr","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"plyrRnds_","outputs":[{"name":"eth","type":"uint256"},{"name":"keys","type":"uint256"},{"name":"mask","type":"uint256"},{"name":"ico","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"bytes32"},{"name":"_team","type":"uint256"}],"name":"buyXname","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"potSplit_","outputs":[{"name":"gen","type":"uint256"},{"name":"p3d","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTimeLeft","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_rID","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"calcKeysReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_keys","type":"uint256"}],"name":"iWantXKeys","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"activated_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_rID","type":"uint256"}],"name":"calcAverageICOPhaseKeyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"plyr_","outputs":[{"name":"addr","type":"address"},{"name":"name","type":"bytes32"},{"name":"win","type":"uint256"},{"name":"gen","type":"uint256"},{"name":"aff","type":"uint256"},{"name":"lrnd","type":"uint256"},{"name":"laff","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"potSwap","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getPlayerInfoByAddress","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"playerID","type":"uint256"},{"indexed":true,"name":"playerAddress","type":"address"},{"indexed":true,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"isNewPlayer","type":"bool"},{"indexed":false,"name":"affiliateID","type":"uint256"},{"indexed":false,"name":"affiliateAddress","type":"address"},{"indexed":false,"name":"affiliateName","type":"bytes32"},{"indexed":false,"name":"amountPaid","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onNewName","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"ethIn","type":"uint256"},{"indexed":false,"name":"keysBought","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"},{"indexed":false,"name":"potAmount","type":"uint256"}],"name":"onEndTx","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"playerID","type":"uint256"},{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethOut","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethOut","type":"uint256"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onWithdrawAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethIn","type":"uint256"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onBuyAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onReLoadAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"affiliateID","type":"uint256"},{"indexed":false,"name":"affiliateAddress","type":"address"},{"indexed":false,"name":"affiliateName","type":"bytes32"},{"indexed":true,"name":"roundID","type":"uint256"},{"indexed":true,"name":"buyerID","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onAffiliatePayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"roundID","type":"uint256"},{"indexed":false,"name":"amountAddedToPot","type":"uint256"}],"name":"onPotSwapDeposit","type":"event"}]') };
    fomoQuickSettings['name'] = "fomoQuick"; 	  
    let object = gameObject(fomoQuickSettings);
    object['name'] = "fomoQuick"; 	  
    let fomoQuick = object;
    await initGame(fomoQuick);
  }	
  async function initAllGames() {
    await initFomoShort();	  
    await initFomoQuick();	  
    await loadAffiliateName();
  }	  
  async function init() {
    await initHourGlass();	  
    await initAllGames();	  
  }	  
  return {init};	
}();	
$(document).ready(function(){
  main.init();
});
