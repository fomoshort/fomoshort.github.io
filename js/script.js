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
const hourglassObject = function() {
  let hourglass = { address:'0xB696E1b839c56108cFa802571ED11b1426D3439A', abi:JSON.parse('[{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"dividendsOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_ethereumToSpend","type":"uint256"}],"name":"calculateTokensReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokensToSell","type":"uint256"}],"name":"calculateEthereumReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"administrators","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"sellPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"stakingRequirement","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_includeReferralBonus","type":"bool"}],"name":"myDividends","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalEthereumBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_customerAddress","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"setStakingRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"buyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_identifier","type":"bytes32"},{"name":"_status","type":"bool"}],"name":"setAdministrator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"myTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_toAddress","type":"address"},{"name":"_amountOfTokens","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_symbol","type":"string"}],"name":"setSymbol","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amountOfTokens","type":"uint256"}],"name":"sell","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"exit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_referredBy","type":"address"}],"name":"buy","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[],"name":"reinvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"incomingEthereum","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"},{"indexed":true,"name":"referredBy","type":"address"}],"name":"onTokenPurchase","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"tokensBurned","type":"uint256"},{"indexed":false,"name":"ethereumEarned","type":"uint256"}],"name":"onTokenSell","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumReinvested","type":"uint256"},{"indexed":false,"name":"tokensMinted","type":"uint256"}],"name":"onReinvestment","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"customerAddress","type":"address"},{"indexed":false,"name":"ethereumWithdrawn","type":"uint256"}],"name":"onWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Transfer","type":"event"}]') };
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
    let data = hourglassContract.sell.getData(amount);
    await tx.sendTransaction({from:userAddress, to:hourglass.address, data:data});	  
  }	
  async function buyTokens(amount) {
    let userAddress = localStorage.getItem("userAddress");
    let p3dRefferal = localStorage.getItem("p3dReferral");	  
    if(!p3dRefferal) { p3dRefferal = "0x0000000000000000000000000000000000000000" };
    let hourglassContract = web3.eth.contract(hourglass.abi).at(hourglass.address);	    
    let data = hourglassContract.buy.getData(p3dRefferal);
    let keyPrice = new BigNumber(await getBuyPrice());	   
    let value = math.toFixed(parseFloat(new BigNumber(amount).mul(Math.pow(10,18)).mul(keyPrice)));	  
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
  return {getSellPrice, getBuyPrice, sellTokens, buyTokens, withdraw, reinvest};			     
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
	
  function getRoundInfo() {
    return new Promise((resolve, reject) => {
      let gameContract = web3.eth.contract(gameSettings.abi).at(gameSettings.address);
      gameContract.getRoundInfo.call(function(err, result) {
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
    let team = localStorage.getItem("team");
    let masternode = JSON.parse(localStorage.getItem("masternode"));
    let gameContract = web3.eth.contract(gameSettings.abi).at(gameSettings.address);   
    let _affcode, data;
    if(!masternode.type) {
      _affcode = "0x0000000000000000000000000000000000000000";
      data = gameContract.buyXAddr(_affcode, team).getData();
    } else if(masternode.type.name) {
        _affcode = masternode.type.name;
        data = gameContract.buyXName(_affcode, team).getData();
    } else if(masternode.type.id) {
        _affcode = masternode.type.id;
        data = gameContract.buyXid(_affcode, team).getData();
    } else if(masternode.type.address) {
        _affcode = masternode.type.address;
        data = gameContract.buyXAddr(_affcode, team).getData();
    }
    let amount = math.toFixed(new BigNumber(_amount).mul(10,18));
    let value =  math.toFixed(await getKeysPrice(amount));	
    await tx.sendTransaction({from:userAddress, to:gameContract.address, data:data, value:value});
  }
  async function reinvestBuy(_amount) {
    let userAddress = localStorage.getItem("userAddress");
    let team = localStorage.getItem("team");
    let keyPrice = localStorage.getItem("keyPrice");
    let masternode = JSON.parse(localStorage.getItem("masternode"));
    let amount = math.toFixed(new BigNumber(_amount).mul(10,18));
    let value =  math.toFixed(await getKeysPrice(amount));		  
    let gameContract = web3.eth.contract(gameSettings.abi).at(gameSettings.address);   
    let _affcode, data;
    if(!masternode.type) {
      _affcode = "0x0000000000000000000000000000000000000000";
      data = gameContract.reloadXAddr(_affcode, team, value).getData();
    } else if(masternode.type.name) {
        _affcode = masternode.type.name;
        data = gameContract.reloadXName(_affcode, team, value).getData();
    } else if(masternode.type.id) {
        _affcode = masternode.type.id;
        data = gameContract.reloadXid(_affcode, team, value).getData();
    } else if(masternode.type.address) {
        _affcode = masternode.type.address;
        data = gameContract.reloadXAddr(_affcode, team, value).getData();
    }
    await tx.sendTransaction({from:userAddress, to:gameContract.address, data:data});
  }	
  async function registerName(_amount) {
    let userAddress = localStorage.getItem("userAddress");
    let team = localStorage.getItem("team");
    let masternode = JSON.parse(localStorage.getItem("masternode"));
    let gameContract = web3.eth.contract(gameSettings.abi).at(gameSettings.address);   
    let name = $('#name').val();	  
    let _affcode, data;
    if(!masternode.type) {
      _affcode = "0x0000000000000000000000000000000000000000";
      data = gameContract.registerNameXaddr(name, _affcode, false).getData();
    } else if(masternode.type.name) {
        _affcode = masternode.type.name;
        data = gameContract.registerNameXname(name, _affcode, false).getData();
    } else if(masternode.type.id) {
        _affcode = masternode.type.id;
        data = gameContract.registerNameXID(name, _affcode, false).getData();
    } else if(masternode.type.address) {
        _affcode = masternode.type.address;
        data = gameContract.registerNameXaddr(name, _affcode, false).getData();
    }
    let amount = math.toFixed(new BigNumber(_amount).mul(10,18));
    let value =  math.toFixed(await getKeysPrice(amount));	
    await tx.sendTransaction({from:userAddress, to:gameContract.address, data:data, value:value});	  
  }	  
  return {getBuyPrice, getTimeLeft, getVault, withdraw, buyKeys, registerName};  
};
const main = function() {
  async function updateVault(object) {
    setInterval(async function() {
      object.name === "fomoShort" ? (fomoShortVault = await object.getVault(), $('#fomoShortVault', fomoShortVault)) :
      (fomoQuickVault = await object.getVault(), $('#fomoQuickVault', fomoQuickVault));
    }, 3000);	    
  }	
  async function updateBuyPrice(object) {
    setInterval(async function() {	  
      object.name === "fomoShort" ? (fomoShortKeysPrice = await object.getBuyPrice(), $('#fomoShortKeysPrice', fomoShortKeysPrice)) :
      (fomoQuickKeysPrice = await object.getBuyPrice(), $('#fomoQuickKeysPrice', fomoQuickKeysPrice));
    }, 3000);	    
  }
  async function updateTime(object) {
    setInterval(async function() {	  
      object.name === "fomoShort" ? 
        (fomoShortTimeLeft = await object.getTimeLeft(),	  
         date = new Date(Date.now()/1000 - fomoShortTimeLeft),
         hours = date.getHours(),
         minutes = date.getMinutes(),
         seconds = date.getSeconds(),
         dateString = hours.toString() + " : " + minutes.toString() + " : " + seconds.toString(),	    
         $('#fomoShortTimeLeft').text(dateString)) :	
        (fomoQuickTimeLeft = await object.getTimeLeft(),	  
         date = new Date(Date.now()/1000 - fomoQuickTimeLeft),
         hours = date.getHours(),
         minutes = date.getMinutes(),
         seconds = date.getSeconds(),
         dateString = hours.toString() + " : " + minutes.toString() + " : " + seconds.toString(),	    
         $('#fomoQuickTimeLeft').text(dateString));	      
    }, 1000);	    
  }
  async function initBuyButton(object) {
    object.name === "fomoShort" ? 	  
    ($('#fomoShortBuyButton').on('click', async function() {
      await object.buyKeys();	    
    })) :
    ($('#fomoQuickBuyButton').on('click', async function() {
      await object.buyKeys();	    
    }));    
  };	
  async function initReinvestButton(object) {
    object.name === "fomoShort" ? 	  
    ($('#fomoShortReinvestButton').on('click', async function() {
      await object.reinvest();	    
    })) :
    ($('#fomoQuickReinvestButton').on('click', async function() {
      await object.reinvest();	    
    }))
  };		
  async function updateHourGlassBuyPrice() {
    setInterval(async function() {
      let buyPrice = parseInt(await hourglassObject.getBuyPrice())/1e18;	    
      $('#hourglassBuyPrice').text(buyPrice);
    }, 1000);
  };
  async function updateHourGlassSellPrice() {
    setInterval(async function() {
      let sellPrice = parseInt(await hourglassObject.getSellPrice())/1e18;	    
      $('#hourglassSellPrice').text(sellPrice);
    }, 1000);
  };
  async function initHourGlassBuyButton() {
    $('#hourglassBuyButton').on('click', async function() {
      await hourglassObject.buy(amount);	    
    });	  
  };	
  async function initHourGlassSellButton() {
    $('#hourglassSellButton').on('click', async function() {
      await hourglassObject.sell(amount);	    
    });	  
  };	
  async function initHourGlassWithdrawButton() {
    $('#hourglassWithdrawButton').on('click', async function() {
      await hourglassObject.withdraw();	    
    });	  
  };
  async function initHourGlassReinvestButton() {
    $('#hourglassReinvestButton').on('click', async function() {
      await hourglassObject.reinvest();	    
    });	  
  };	
  function initFomoQuickTeamSelector() {
    $('#tab1-2 > div.teamSec > ul').on('click', function(e) {
      $(e.currentTarget).addClass("active");  	    
    });	     
  }	
  function initFomoShortTeamSelector() {
    $('#tab1 > div.teamSec > ul > li').on('click', function(e) {
      $(e.currentTarget).hasClass("active") ?
      $(e.currentTarget).removeClass("active") :	      
      $(e.currentTarget).addClass("active");  	    
    });	     
  }
  async function initHourGlass() {
    await updateHourGlassBuyPrice();
    await updateHourGlassSellPrice(); 	  
    await initHourGlassBuyButton();
    await initHourGlassSellButton();
    await initHourGlassWithdrawButton();	  
    await initHourGlassReinvestButton();	  
  }	
  async function initGame(object) { 
    await updateVault(object);	  
    await updateBuyPrice(object);
    await updateTime(object);	 
    await initBuyButton(object);
    await initReinvestButton(object);	  
  }	
  async function initFomoShort() {
    let fomoShortSettings = { address:'0x2F39DC863f6845983f8b7055F1222bf8D1C51f1B', abi:JSON.parse('[{"constant":true,"inputs":[],"name":"getBuyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"bytes32"},{"name":"_team","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"reLoadXname","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"activate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"pIDxAddr_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"round_","outputs":[{"name":"plyr","type":"uint256"},{"name":"team","type":"uint256"},{"name":"end","type":"uint256"},{"name":"ended","type":"bool"},{"name":"strt","type":"uint256"},{"name":"keys","type":"uint256"},{"name":"eth","type":"uint256"},{"name":"pot","type":"uint256"},{"name":"mask","type":"uint256"},{"name":"ico","type":"uint256"},{"name":"icoGen","type":"uint256"},{"name":"icoAvg","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"}],"name":"plyrNames_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"fees_","outputs":[{"name":"gen","type":"uint256"},{"name":"p3d","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"pIDxName_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"uint256"},{"name":"_team","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"reLoadXid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"address"},{"name":"_all","type":"bool"}],"name":"registerNameXaddr","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_pID","type":"uint256"},{"name":"_addr","type":"address"},{"name":"_name","type":"bytes32"},{"name":"_laff","type":"uint256"}],"name":"receivePlayerInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"rndTmEth_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rID_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pID","type":"uint256"}],"name":"getPlayerVaults","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"bytes32"},{"name":"_all","type":"bool"}],"name":"registerNameXname","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentRoundInfo","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"address"},{"name":"_team","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"reLoadXaddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"uint256"},{"name":"_team","type":"uint256"}],"name":"buyXid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_pID","type":"uint256"},{"name":"_name","type":"bytes32"}],"name":"receivePlayerNameList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"uint256"},{"name":"_all","type":"bool"}],"name":"registerNameXID","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"address"},{"name":"_team","type":"uint256"}],"name":"buyXaddr","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"plyrRnds_","outputs":[{"name":"eth","type":"uint256"},{"name":"keys","type":"uint256"},{"name":"mask","type":"uint256"},{"name":"ico","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"bytes32"},{"name":"_team","type":"uint256"}],"name":"buyXname","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_otherF3D","type":"address"}],"name":"setOtherFomo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"potSplit_","outputs":[{"name":"gen","type":"uint256"},{"name":"p3d","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTimeLeft","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_rID","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"calcKeysReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_keys","type":"uint256"}],"name":"iWantXKeys","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"activated_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"plyr_","outputs":[{"name":"addr","type":"address"},{"name":"name","type":"bytes32"},{"name":"win","type":"uint256"},{"name":"gen","type":"uint256"},{"name":"aff","type":"uint256"},{"name":"lrnd","type":"uint256"},{"name":"laff","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"potSwap","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getPlayerInfoByAddress","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"playerID","type":"uint256"},{"indexed":true,"name":"playerAddress","type":"address"},{"indexed":true,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"isNewPlayer","type":"bool"},{"indexed":false,"name":"affiliateID","type":"uint256"},{"indexed":false,"name":"affiliateAddress","type":"address"},{"indexed":false,"name":"affiliateName","type":"bytes32"},{"indexed":false,"name":"amountPaid","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onNewName","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"ethIn","type":"uint256"},{"indexed":false,"name":"keysBought","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"},{"indexed":false,"name":"potAmount","type":"uint256"}],"name":"onEndTx","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"playerID","type":"uint256"},{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethOut","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethOut","type":"uint256"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onWithdrawAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethIn","type":"uint256"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onBuyAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onReLoadAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"affiliateID","type":"uint256"},{"indexed":false,"name":"affiliateAddress","type":"address"},{"indexed":false,"name":"affiliateName","type":"bytes32"},{"indexed":true,"name":"roundID","type":"uint256"},{"indexed":true,"name":"buyerID","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onAffiliatePayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"roundID","type":"uint256"},{"indexed":false,"name":"amountAddedToPot","type":"uint256"}],"name":"onPotSwapDeposit","type":"event"}]') };	
    let fomoShort = gameObject(fomoShortSettings);
    await initGame(fomoShort);
  }	
  async function initFomoQuick() {
    let fomoQuickSettings = { address:'0x2F39DC863f6845983f8b7055F1222bf8D1C51f1B', abi:JSON.parse('[{"constant":true,"inputs":[],"name":"getBuyPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"bytes32"},{"name":"_team","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"reLoadXname","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"activate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"pIDxAddr_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"round_","outputs":[{"name":"plyr","type":"uint256"},{"name":"team","type":"uint256"},{"name":"end","type":"uint256"},{"name":"ended","type":"bool"},{"name":"strt","type":"uint256"},{"name":"keys","type":"uint256"},{"name":"eth","type":"uint256"},{"name":"pot","type":"uint256"},{"name":"mask","type":"uint256"},{"name":"ico","type":"uint256"},{"name":"icoGen","type":"uint256"},{"name":"icoAvg","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"}],"name":"plyrNames_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"fees_","outputs":[{"name":"gen","type":"uint256"},{"name":"p3d","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"pIDxName_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"uint256"},{"name":"_team","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"reLoadXid","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"address"},{"name":"_all","type":"bool"}],"name":"registerNameXaddr","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_pID","type":"uint256"},{"name":"_addr","type":"address"},{"name":"_name","type":"bytes32"},{"name":"_laff","type":"uint256"}],"name":"receivePlayerInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"rndTmEth_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"rID_","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_pID","type":"uint256"}],"name":"getPlayerVaults","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"bytes32"},{"name":"_all","type":"bool"}],"name":"registerNameXname","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"getCurrentRoundInfo","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"address"},{"name":"_team","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"reLoadXaddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"uint256"},{"name":"_team","type":"uint256"}],"name":"buyXid","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_pID","type":"uint256"},{"name":"_name","type":"bytes32"}],"name":"receivePlayerNameList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_nameString","type":"string"},{"name":"_affCode","type":"uint256"},{"name":"_all","type":"bool"}],"name":"registerNameXID","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"address"},{"name":"_team","type":"uint256"}],"name":"buyXaddr","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"name":"plyrRnds_","outputs":[{"name":"eth","type":"uint256"},{"name":"keys","type":"uint256"},{"name":"mask","type":"uint256"},{"name":"ico","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_affCode","type":"bytes32"},{"name":"_team","type":"uint256"}],"name":"buyXname","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_otherF3D","type":"address"}],"name":"setOtherFomo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"potSplit_","outputs":[{"name":"gen","type":"uint256"},{"name":"p3d","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getTimeLeft","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_rID","type":"uint256"},{"name":"_eth","type":"uint256"}],"name":"calcKeysReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_keys","type":"uint256"}],"name":"iWantXKeys","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"activated_","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"plyr_","outputs":[{"name":"addr","type":"address"},{"name":"name","type":"bytes32"},{"name":"win","type":"uint256"},{"name":"gen","type":"uint256"},{"name":"aff","type":"uint256"},{"name":"lrnd","type":"uint256"},{"name":"laff","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"potSwap","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"getPlayerInfoByAddress","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"playerID","type":"uint256"},{"indexed":true,"name":"playerAddress","type":"address"},{"indexed":true,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"isNewPlayer","type":"bool"},{"indexed":false,"name":"affiliateID","type":"uint256"},{"indexed":false,"name":"affiliateAddress","type":"address"},{"indexed":false,"name":"affiliateName","type":"bytes32"},{"indexed":false,"name":"amountPaid","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onNewName","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"ethIn","type":"uint256"},{"indexed":false,"name":"keysBought","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"},{"indexed":false,"name":"potAmount","type":"uint256"}],"name":"onEndTx","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"playerID","type":"uint256"},{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethOut","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethOut","type":"uint256"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onWithdrawAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"ethIn","type":"uint256"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onBuyAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"playerAddress","type":"address"},{"indexed":false,"name":"playerName","type":"bytes32"},{"indexed":false,"name":"compressedData","type":"uint256"},{"indexed":false,"name":"compressedIDs","type":"uint256"},{"indexed":false,"name":"winnerAddr","type":"address"},{"indexed":false,"name":"winnerName","type":"bytes32"},{"indexed":false,"name":"amountWon","type":"uint256"},{"indexed":false,"name":"newPot","type":"uint256"},{"indexed":false,"name":"P3DAmount","type":"uint256"},{"indexed":false,"name":"genAmount","type":"uint256"}],"name":"onReLoadAndDistribute","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"affiliateID","type":"uint256"},{"indexed":false,"name":"affiliateAddress","type":"address"},{"indexed":false,"name":"affiliateName","type":"bytes32"},{"indexed":true,"name":"roundID","type":"uint256"},{"indexed":true,"name":"buyerID","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"timeStamp","type":"uint256"}],"name":"onAffiliatePayout","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"roundID","type":"uint256"},{"indexed":false,"name":"amountAddedToPot","type":"uint256"}],"name":"onPotSwapDeposit","type":"event"}]') };	
    let fomoQuick = gameObject(fomoQuickSettings);
    await initGame(fomoQuick);
  }	
  async function initAllGames() {
    await initFomoShort();	  
    await initFomoQuick();	  
  }	  
  async function init() {
    initFomoShortTeamSelector();	  
    await initHourGlass();	  
    await initAllGames();	  
  }	  
  return {init};	
}();	
$(document).ready(function(){
  main.init();
});
