/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Boolean Objects
Array.prototype.filter()
*/ 

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(function(prop) {
    return prop !== "undefined" && prop !== "" && prop;
  });
}

bouncer([7, "ate", "", false, 9]) //should return [7, "ate", 9].
bouncer(["a", "b", "c"]) //should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]) //should return [].
bouncer([1, null, NaN, 2, undefined]) //should return [1, 2].