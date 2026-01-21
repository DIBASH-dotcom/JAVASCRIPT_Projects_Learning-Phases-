let hasGenerator = false;
let hasInverter = true;
let hasSolar = true;

if ((hasGenerator && hasInverter) || hasSolar) {
    console.log("Backup works");
} else {
    console.log("No Backup works");
}
