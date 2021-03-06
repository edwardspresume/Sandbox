// YOUR CODE BELOW

// const onlyOne = (var1, var2, var3) => {

//     if (!!var1 && !var2 && !var3) return true;

//     if (!var1 && !!var2 && !var3) return true;

//     if (!var1 && !var2 && !!var3) return true;

//     return false
// }

/* ==========================================================================
                                 Alternative 1
   ========================================================================== */

// const onlyOne = (var1, var2, var3) => {
//     return (!!var1 && !var2 && !var3) || (!var1 && !!var2 && !var3) ||
//         (!var1 && !var2 && !!var3)
// }


/* ==========================================================================
                                 Alternative 2
   ========================================================================== */

// False = 0  true = 1 so this will work if only one of the arg is true
// const onlyOne = (var1, var2, var3) => !!var1 + !!var2 + !!var3 === 1;


/* ==========================================================================
                                 Alternative 3
   ========================================================================== */

const onlyOne = (var1, var2, var3) => {

   let truthCount = 0;

   if (var1) truthCount++;

   if (var2) truthCount++;

   if (var3) truthCount++;

   return truthCount === 1;
}