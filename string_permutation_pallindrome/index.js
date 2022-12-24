const execute = () => {
    // let str = 'nitin'
    let str = 'oqvphrjkuoptuhuphqofvalugrtruraavvjhpcigrppohspvetpuutehotveplatfuqivruofapjvamahpokcrpphvekauauropvoevaghfrhhpoikhgidflihfheqkkoulfraormrqaaflephivuoamhprtrraakvteeeoefaufoorfoaofogboafvnuuvqouaavourgqarhkguhutaaarrrghiaiitsjlhrvheaufvtqcsuvfeotabrukimfaarekghuevtfpkfeuuhaohumaqirhohctvrfqhjoeakiusghrtgekauhajevrheoofahfpvthkrheuvruvrqhikhiuigfhpvgtvifrpobufkoovvlhiufajvrotimofureheuknuovropthvatfoqurlkbjuilhhturirvihfhoafouuqfkkeilatruufojqffrpahttkraeiquorhkivvvfboiapkfujcrqtfuuejsmhtrhatukefqtuqfpouuoivoempafojeqhiarlatukejkafrgarhrerbfceiirvvfvposapvljuvhircorueiofufvuuhitfumejjhimqugrikiuarlcvvacqvuphtivmrufphihohhhhuooimuhrtpreouuauqeatcskpufqvavtpvabqfrqvuoobjauhihkuikqrqffekureuooipftithofoerteffrarjofaitjhrvakrvqohfjfrooeujotipfqpgfottcrhtputemvguhhcurauavitrapqgaggefhevruehihgrorophhohpivuqquehiplpfofiourgpapgtjvifuhqvibfebkpatcvhbhrvukophuvfprulfrhapaiikfeepuikkehlsqvofqvuoqtuhivhvtvpvetvafuatvkhtitorhritiargmutravvqqkrveforhaaftdhhuoopuoahpoeokpheiaivftcop'
    let obj = {}

    for (let char of str) {
        if (obj[char]) obj[char] = obj[char] + 1
        else obj[char] = 1
    }

    const obj_values = Object.values(obj)

    const length = obj_values.length
    let counter = 0
    let result = false;

    for (let val of obj_values) {

        let compute_if_odd = val % 2 !== 0

        if (compute_if_odd) {
            counter++
        }

        if (counter > 1) {
            result = false
            break
        } else {
            result = true
        }

    }

    console.log(result)


}

exports.execute = execute