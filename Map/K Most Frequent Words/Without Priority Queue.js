let some_words = 'yrlvhf e clqdhfrl njdqkehoim hjvawsidm kobct hlvxaecqr z slcb zcurm fcivdkonsb rcqvuhgwp h cgqeajsyou jxszmmb ffmdbwl nlhgnn t hlpv xg sfsgiqo frpbco nvudi wabipwpne flolu zjksan pdmkz vtlvuvkslz jejzsfe pqordkgiyt nqabnu xoj mufw xby srhkwtqfsl hbpkolh asp nuiju jneaw xrhel qvwhfkt avhph kshgeqtkr zqkguwym uuyhpnjk btulnbt rmekfd plunjhggd ps a q xk nnhge kp p samh vquyvjs jwhnvt ig pm zdh vzrhidey ev wmusvhpok wtnjy mffhgzqqe pea owziqurgl g xv xjfer mqfdw uaegpahztc bpxhyu rsnwy m wr tvkvz kbykwcd tagrwiiq gpc cb s hcriu msoiwtgpt hrxrivyzz bcdtynvs pwjkmsgf yamhrlybg agrbixw krdj zt nnbunbub n jrvh bzvmwrxila ubmnqzqk sgqat lm tgcub suncfpv qiqihhsw ym trpgpimt pjyjy rpv h jpnqhlrfxu ojhftt'
let words = some_words.split(' ')

const k = 1

let hash = {};
for (let word of words) {
    hash[word] = hash[word] + 1 || 1;
}
let result = Object.keys(hash).sort((a, b) => {
    let countCompare = hash[b] - hash[a];
    if (countCompare == 0) return a.localeCompare(b);
    else return countCompare;
}
);
return result.slice(0, k);