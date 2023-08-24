//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var values = [];

  for (var key in object) {
      values.push(object[key]);
    }
    return values
  }

  


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var values = Object.values(object).filter(value => typeof value === 'string');
    return values.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
      } else if (typeof collection === 'object' && collection !== null) {
        return 'object';
      } else {
        return 'unknown';
      }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var word = string.charAt(0).toUpperCase() + string.slice(1);
    return word
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var words = string.split(' ');
    var capitalizedWords = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
  
    return capitalizedWords.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var person = object.name.charAt(0).toUpperCase() + object.name.slice(1)
    return 'Welcome ' + person + '!'
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
var pet = object.name.charAt(0).toUpperCase() + object.name.slice(1);
var kind = object.species.charAt(0).toUpperCase() + object.species.slice(1);
return pet + ' is a ' + kind
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (Array.isArray(object.noises) && object.noises.length > 0) {
        return object.noises.join(' ');
      } else {
        return 'there are no noises';
      }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var wordsArray = string.split(' ');
    return wordsArray.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    if (!Array.isArray(object.friends)) {
        object.friends = [];
      }
      
      object.friends.push(name);
      return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  if (typeof object !== 'object' || object === null || !Array.isArray(object.friends)) {
   return false
  }
  
  for (var i = 0; i < object.friends.length; i++) {
    if (object.friends[i] === name) {
      return true;
    }
  }
  
  return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
  var nonFriendNames = [];

  for (var i = 0; i < array.length; i++) {
    var isFriend = false;
    
    if (array[i].name !== name) {
      for (var j = 0; j < array[i].friends.length; j++) {
        if (array[i].friends[j] === name) {
          isFriend = true;
          break;
        }
      }
      
      if (!isFriend) {
        nonFriendNames.push(array[i].name);
      }
    }
  }

  return nonFriendNames;
}





//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  object[key] = value;
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  for (var i = 0; i < array.length; i++) {
    var prop = array[i];
    if (object.hasOwnProperty(prop)) {
      delete object[prop];
}
  }
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  var deduplicatedArray = [];
  
  for (var i = 0; i < array.length; i++) {
    if (deduplicatedArray.indexOf(array[i]) === -1) {
      deduplicatedArray.push(array[i]);
    }
  }
  
  return deduplicatedArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}