 exports. object = {
    firstname: "Favour",
    lastname: "Udegbunem",
    dob: "19-04-200n",
    bestfood: "Yam/Rice",
    bestsoup: "Sent-leave soup (Ahuji)",
    residence: "130b Ngwa road",
    town: "Aba",
    country: "Nigeria"
}

 module.exports = function myBio () {
    let bio = (`my name is ${firstname + lastname} i am born in ${dob} and my best food is ${bestfood} and my best soup is ${bestsoup} and my residence is ${residence} and my town is ${town} and the name of my country is ${country}.`)
    return bio;
}