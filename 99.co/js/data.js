var app = app || {};

app.getAllDistrictData = function(){

    var d1 = new app.singleDistrictModel({
        id   : "01",
        title: "D01 (Boat Quay / Raffles Place / Marina)"
    });

    var d2 = new app.singleDistrictModel({
        id   : "02",
        title: "D02 (Chinatown / Tanjong Pagar)"
    });

    var d3 = new app.singleDistrictModel({
        id   : "03",
        title: "D03 (Alexandra / Commonwealth)"
    });

    var d4 = new app.singleDistrictModel({
        id   : "04",
        title: "D04 (Harbourfront / Telok Blangah)"
    });

    var d5 = new app.singleDistrictModel({
        id   : "05",
        title: "D05 (Buona Vista / West Coast / Clementi)"
    });

    var d6 = new app.singleDistrictModel({
        id   : "06",
        title: "D06 (City Hall / Clarke Quay)"
    });

    var d7 = new app.singleDistrictModel({
        id   : "07",
        title: "D07 (Beach Road / Bugis / Rochor)"
    });

    var d8 = new app.singleDistrictModel({
        id   : "08",
        title: "D08 (Farrer Park / Serangoon Rd)"
    });

    var d9 = new app.singleDistrictModel({
        id   : "09",
        title: "D09 (Orchard / River Valley)"
    });

    var d10 = new app.singleDistrictModel({
        id   : "10",
        title: "D10 (Tanglin / Holland)"
    });

    var d11 = new app.singleDistrictModel({
        id   : "11",
        title: "D11 (Newton / Novena)"
    });

    var d12 = new app.singleDistrictModel({
        id   : "12",
        title: "D12 (Balestier / Toa Payoh)"
    });

    var d13 = new app.singleDistrictModel({
        id   : "13",
        title: "D13 (Macpherson / Potong Pasir)"
    });

    var d14 = new app.singleDistrictModel({
        id   : "14",
        title: "D14 (Eunos / Geylang / Paya Lebar)"
    });

    var d15 = new app.singleDistrictModel({
        id   : "15",
        title: "D15 (East Coast / Marine Parade)"
    });

    var d16 = new app.singleDistrictModel({
        id   : "16",
        title: "D16 (Bedok / Upper East Coast)"
    });

    var d17 = new app.singleDistrictModel({
        id   : "17",
        title: "D17 (Changi Airport / Changi Village)"
    });

    var d18 = new app.singleDistrictModel({
        id   : "18",
        title: "D18 (Pasir Ris / Tampines)"
    });

    var d19 = new app.singleDistrictModel({
        id   : "19",
        title: "D19 (Hougang / Punggol / Sengkang)"
    });

    var d20 = new app.singleDistrictModel({
        id   : "20",
        title: "D20 (Ang Mo Kio / Bishan / Thomson)"
    });

    var d21 = new app.singleDistrictModel({
        id   : "21",
        title: "D21 (Clementi Park / Upper Bukit Timah)"
    });

    var d22 = new app.singleDistrictModel({
        id   : "22",
        title: "D22 (Boon Lay / Jurong / Tuas)"
    });

    var d23 = new app.singleDistrictModel({
        id   : "23",
        title: "D23 (Bukit Batok / Bukit Panjang)"
    });

    var d24 = new app.singleDistrictModel({
        id   : "24",
        title: "D24 (Choa Chu Kang / Tengah)"
    });

    var d25 = new app.singleDistrictModel({
        id   : "25",
        title: "D25 (Admiralty / Woodlands)"
    });

    var d26 = new app.singleDistrictModel({
        id   : "26",
        title: "D26 (Mandai / Upper Thomson)"
    });

    var d27 = new app.singleDistrictModel({
        id   : "27",
        title: "D27 (Sembawang / Yishun)"
    });

    var d28 = new app.singleDistrictModel({
        id   : "28",
        title: "D28 (Seletar / Yio Chu Kang)"
    });

    var allDistrictData = new app.allDistrictCollection([
        d1,d2,d3,d4,d5,d6,d7,d8,d9,
        d10,d11,d12,d13,d14,d15,d16,d17,d18,d19,
        d20,d21,d22,d23,d24,d25,d26,d27,d28
    ]);

    return allDistrictData;
}

app.getAllDistrictPolygon = function(){
    allDistrictPolygon = {"districts": {"15": {"polygons": [[{"numLevels": 18, "levels": "PHDGDCEGCCCDDECDACCDABBDCHBBBDCFGAB@KCCGDDBDHAC@FAACEACD?F@BD@GBEABCC@DDFFIEBBCBBDE?GBDBGC?AFAA@HBECCBECBIBCG?A?GFDP", "zoomFactor": 2, "points": "}pzF}o_yRo\\wl@vZi@tCeCyPwQo@gF\\k@{QsU]kDl@YwByHf@sB{CyC_Nac@TiAuNmw@yFyP{DeN{@yJuC_JmAoN}AeLOcEw@wEcDaIwBuKMI]`A{Bb@{@v@eBiAsDdCqGaYgMfCkHhAcFv@cNzANhIyApGV|FmRxGd@zAyHjCyAfAqHtAFtAnArI|BnJ`CtIf@K`AqAr@_@vA@^xC@pA_@hD~BnJz@xCdAi@d@c@`@}@~Bn@~Bz@cAhCqBfBr@jDlFh^zB|Sp@YpBzP`BzPfBKd@jEiKzGrBtPbEiBZv@?vCr@f@PjDr@hBF`BzGhDr@jFr@tE`TaDjEiAvB?tAp@t@dAVxCfCjVd@pBhAzAlCrB~V`VtGvG`BjEz@`GwAzIoChGm@`EFzDbD|Xb@lBv@l@vEj@|E@fHy@@SgAcXoBk_@IaCjUnDrMkBnHaH"}]]}, "14": {"polygons": [[{"numLevels": 18, "levels": "PBFFGHBDBFAC?DDHCHBFFBCDICCGEFGDDCFCEGCEBECBCEBCEKCFBCFDAHD?BBF@BGDBGEDABCCAEHFFDDCCEAFDBFDC@IB@CAECCEDADEFAADDCHDCECFGEBBEBIBBEBEEBFBBFADGBDP", "zoomFactor": 2, "points": "cveGwpgyRlGfHfHjFiKnO|UnYqJd|@`MtE~E|CxG|ErJ|JnDxHtCxH|AlHl@bC|AUjDpFjb@gBxQiCM`GeBrOaRi@mA~Ma@|Lj@lAqAh@vFtDSp@~I~EvJiC{DwObHcAbLt_@tEnFj@tHbAlCjFd@dCtAnHdMvKjBlEYzDwBbDuC|ClAtEYn@]lE\\~BlB`@hA|F|C`GwBo@yGd@mEf@Y|Js@tGoBtEiGlA}Jh@oBeB{HqGuHiLoMcJmIiCsDsAkMeAcL_AcDiCu@}JzB_PnBoBoMyGyCIcBi@yA]{Ds@a@BqCKw@iE`B_CaRlKiGe@wD}ALwEqb@m@PcL}x@lB}Bz@iBkFkBm@lAcBz@qEsOr@_DYoDOs@eACcAv@i@n@gBl@sBT]lClAfAg@r@}CXK_CUa@wBRqC|FcLqCYYw@GyA{BuCl@mEOMtElAxCn@BuCbFyDxApPza@_ExEqE]c@TsACw@jDM~Bm@Kg@s@iBKa@{AIwF{FKeAcHoAoDiEdBUYkDpAkHcS}AgFkBcN{Ho@mJsBiTf@"}]]}, "17": {"polygons": [[{"numLevels": 18, "levels": "PFGIFHCGGEFDFEAIEDDGFECFDFDKBCDBEFCHEDFBGDFDHECDGEEEDBEDLEFDEFBDCCEIDBDCCDFAIDCFHCGEEJFFGGCFHEDFGGCECP", "zoomFactor": 2, "points": "ms_GakpyRqNfFkOgc@gnBugA_Yvu@wr@lc@gUvE}m@vQaa@y`@oXjOaVFoF|Ds@dI_TwD}Bl@uMvBkDkSdByJpCcAkAoByJlAgXmb@r@eF{@_BgFdAuArDyGyCaKoMeA{RGkL{@mAz@{Dr@_M_F_J|O{i@nF}WfJ}L~\\{Nfr@{SvFsKdA{DvBFh@|LfJnBpC}AnF{VeB{GuEeIz@oFvFeApJ}[aCuAlf@cjAfJeQzZgg@uAwBbHcH~EeAdEvIuLtH}AeA{NxQP~Ba@~BmEnINbAoCjDdBdEbWxCtEtAxQrHfJz@bShJjf@xNdThCzClE`D~FhVdAfFvBlLjAzK{Kz@cSs@uf@zi@YlAyChKtEa@~T_Yj@Pjb@tXHb@ps@dBdXzZ|m@j@~TyJ~TeIx`@nFha@kWpC~Bph@Q~[fBvQdIfg@"}], [{"numLevels": 18, "levels": "PADCCDDDFCFCCFEDDAFDBECBFCCDBDAGF@CDCEBCIBFCED?GEDDADCBBGCECEBCEEFGCDDDBEF?FC@CBGBFBEDKCCCFCCCDCCCEBCGEDEBHCBCBECDCFEDBDAFB@D@ECAAHCBDDECCEDCFBCECBEDBBCAHCDECECEACECP", "zoomFactor": 2, "points": "iytGwaiyR`@q@|DkD`DGj@mAfCk@|DsDk@mB|H_F?{DyCkObAs@`Dr@fFInBkPXmEwB`@s@uAs@cDr@oBvB?vBr@|D{DfCuA~AQIeB|D}LrA{@OoB`@}DjDmEdByCzKdI~EmEtEsDzDaGpFq@`HmEtA{CxF_GdB_F{@iCkLeQvB{CGeBrD|AbEmAvBq@aDuAbAcDuAyNyCyJcAmEz@YY}AXs@s@gNsDqCuAyCP_BrAcAyCkHoByCb@eAiGuEmHz@qK_\\`@sAi@yBhDwFuAcLj@gBtAeBqCsKdMsH|AeAXkAa@yBi@wBh@q@FcDgCOwM`@h@oBdAcAs@wEqCq@oBjAeBjD?vBoBz@k@{@aDr@k@k@oFHeBuAyC?mAuAsDs@mAlA_Cp@eBGuHtHuAnJnBfFcDzDcAXlAb@|AhD?~Ah@jAj@?X~I{@fBjArHnBpCcH`VjDvB}ApCiCnBuA~I{@~IdAhGN|Er@nMzD|O|AbHXdIOfJa@zD?lAuAF?tAc@z@iDlAeA|Er@zClAp@NhC_CxCwBzK?xCgBb@sDFq@s@mEfFoBnFcDhGGxFoMpa@}AdIwBpFG|AmAvF`@nBvBnBhCFr@|Dk@jHhGfCzCzCp@`Dj@tEk@dA~EN|Az@"}], [{"numLevels": 18, "levels": "PABFEDKFADFDHEFEHEDJDBBFAHA@E?FDDFDKCDHCACFCJC?EHEBBCCBP", "zoomFactor": 2, "points": "sfjGmh`zRzdBquBxs@yz@`Z{^dEwIPeIwBqGgMyB_GzCmu@dc@yYrKa]fCeXGmq@kH_iAe[s_Aie@g`@oIwXj@_NbHqYhGcPnJoBPgUxJ}DbAmXf`@o`@xk@uLpa@}Lh`@wInYqCjZcA|L}DxFwQpGcH|HgCtPNvMhGpd@nMbm@vItSjLhKrZt]zMhPrHvGjIdDjQvBlIcArr@gQf{Ai_@ha@kQ`SkOvPiThBwDx^ye@vCsA|`@qf@|X}^"}]]}, "16": {"polygons": [[{"numLevels": 18, "levels": "P?B@BEBFBDCAFBFBDECABGCEEIGGECCEHFCBHD?BIB@CGDAFDAFBBFBEE?BEBAKAEBA?E?G@B?FCEABDGBDCAAEEDADBHCEAE@CAGDBDDG?CCHBAG@FDCBCI@A@CA?@C?DC@A@EB?@C@@BA??BB@?CB@A?BDBAB@?BA@@BC@AABABECCACCDABDACADBCDACBAEBCA?CA@CCD@EBBCDJBCDAEF@GIB?GAA?E@@P", "zoomFactor": 2, "points": "{egGonpyRx@n@j@\\pA\\lBx@dAhAn@pC@~BfAy@fC{DxCiBZCn@Xd@pKSrE~Jm@dIDf@wBbF|A|BL`EOtB\\fCtExF`ToDpArOp_@_WtSxZxa@oIbHyAiAoGiAmJc@yNlBVvKfItBhJfE`IbFo_@d`@{KfSuAlCcFzG`C|ElDzK|DzKjDlE~TKzMzBpE`@vBjO|CpJbFlMfDeADP|EmBrArD~@fHbGNEnC@fBXzAlBLh@l@^LNgBr@iE~AJ\\WfDNh@F~CsDR[oC}FgC_GqDeKeB{E|DsArCsEW?]]_AiCL}EjEL~Ck@bBpBh@Fl@`@dKjCjC{FvCSRXHbC|BQh@]iAiAb@gDvBSv@[}BkIaC{JmAqIIyArHwAzAcAvHmCi@}AnRwGKuDIeAtAoGOmIfN}AxOeC`McCrCdL|BvKrD_CbBdAx@q@vBc@b@cAIOa@SAQGMJo@LGZWJSCUQu@r@oBP@PTH?@IW_@CAEFa@E{A{FDCAG]s@E?ABCAoAyFBKB@DCSq@G@@HK?MEs@wBk@uEGLGEOy@u@kBQo@Bc@FC@FFCSy@EB@FOAKQoA}EeCmHyJid@G}Ad@Qw@gCi@mENeAj@Bk@gA]uCm@}ACcBNa@d@b@FEw@{A[CgAmFA}ARs@`@]^b@FKkAcBUNs@aD[w@}@{CA[TIJOsAsAWXmA_F{AmFFa@TDI]s@s@rBkB[YuA|@e@SaA}AcA_DkJfDgGoPyGaQkmBygAgL~[aGtNgDlIsFzDqMtH}QdLsHxEwGxAkF~@}D`A"}]]}, "11": {"polygons": [[{"numLevels": 18, "levels": "PBDFBDGEDGBFDBFDBDBBGCABCCCEBADBD?BADBFBAADI?D@CC@FFEADG@CBDAD@CEBAEA@@BHD@CD@DAAGC@FBDAG?B@BBKA?C?CE@DBFBHCCG?ACAEBAFBBAF@?B?IBCCDBDFECBP", "zoomFactor": 2, "points": "gpfGswnxRs@wIFgIpA}HjCwEfEmFdMgJaVmTcDiKHuHbLgWxAqErD{C`Eu@xCFUiGz@qAhAe@xAkHh@sGj@kA]aIg@aAoA}G]aEp@qAmBsDUoF|A{DpAwB~@s@PyCbAiCo@yCMcAIaBNiA`@sBjCaEq@qCLWOYDuBeEsH~BuBpB}AbBMpA?xHcClDK`DQCyLtIm@`GlC`@`@bCzFbD_Bp@c@`FsAdEc@rEwDxEaDfJ}ChHwBnECd@{Dd@m@j@qBz@IvBBtCPhB@zAW{AmEkC{AkD{AmEe@EONeBqB_AsCc@i@YpAsE|DwDnBwBhDfBtABvB]xOyAMuCQuBBgAAuCc@wCJsBtAnDjAvB|@lBvAjFlAxEhDnGhCfElBlC`GvC|A|A`Cb`@GtBcF`GyDhAkNnMcBpG_DhM}GtZmHz]iCnOu@dGw@~P}ArUkEhIgPfWoFtJ_B~DcBvH{Jd`@uDjOkIlYWlAs@IkBr@y[YqItA}F?}LkAsDzBkM{EsBeBwBwDi@sB"}]]}, "10": {"polygons": [[{"numLevels": 18, "levels": "PCCBCAFFEABEBBHDAFBCC@BCDB@GCBCFBACEDA?BHC@ECBJEBADF?EEFBC?CEEE?CE?BH?CCFAA?CEGEBDDFCCEEABFBCGBFABFABDGFA@FCBEA@KCCECEEE@DGBDBGCDEC@CCGACFCEG@CDEBIAB@@FB@AFACEABF@CP", "zoomFactor": 2, "points": "ou_GmxwxRnDtCrDtHz@Rl@t@pA~BhBjFrKo@cDbK^|@`CjKExAtBrBtBf@d@l@|B?n@_C`FqLrEvB\\x@tAI~An@jErAz@~@Xk@xCvAd@h@bDjCbAuAHaE[uBnAk@rFeBpEg@pCq@dCkBxAhEvJwC|Bg@pBg@vAeAPvBmBjLSdBxAzSdArCHfFmC@o@zGJ\\KzBuC@q@bMBDbHHoAfRu@Ce@^aAvAgBvCgGrEgCxNqCi@D`D@zEmAfIeBjCmAnBmBlEoG`JyBvCcD`Cs@dCgGo@gFMiF_@iD[sHTiE|En@`IfA?vEhBk@rBrFpDqEpFp@x@wAxB`ErCkBhCoClF_AtCgC`@_FSwFdABzC~@`FbDm@dCS~BLTbALrGjAfIs@nJyCrFw@]kDwCiDgDeB~BcEdPiChNeFtGoElHcAvA{EqFqEoAeAwAyAsEXaBmN_EhAaEcB]sAc@}CcF}AxAgBp@wF`A_KVoCcEYwD~C_LCiAW@SEc@eJ{AaEkGC}DLuBn@~@|CV|HyDHg@[mAkAMgAjAeF_JwE}FcBdEwNrDmNhGsWdEuOlCgLfBeEdFwIdRwZhCiFp@mI`C}a@rBuMjBcKvPov@|E{QzEuEjGuFbDgA"}]]}, "13": {"polygons": [[{"numLevels": 18, "levels": "PFFCDHDCGFEGHDBFDCIDBCDCDJCBFFE?BFCDCFEDGCCDCGEFGECCEDDHBEECP", "zoomFactor": 2, "points": "soaGcxayRmBrViRi@gB|[`@|AsA`@~FjDa@dAfJvFzKyCsD}OxFq@rLl_@eFdIqN~I}OnMqKtP_FjSwBjDeIjDyRr@yQF_NtAeP|E}PpCeMa@z@yCN_Fa@}ApN{@{@{OkDaGwBkDs@QlAwB~Bi@a@uAbAyCtLvBXaCpGGPgCmAkDHwPgBwFs@wIrDqGbHpJ~IgFkAwIzHmPfBqC|AYmAoJhCk@cAeIfYgJ`CQpCfFze@oBnNwB"}]]}, "12": {"polygons": [[{"numLevels": 18, "levels": "PCDBCEDGBBFDAECEC@GCAEBEBCAIDB@FDCGE@@FBEBHD@BCKEECF@CAF?BE@DAHCAD@@DACBIBAEA??@BGDACDADAAEGAEBD@GABBF?@GAD@P", "zoomFactor": 2, "points": "ai~F{_}xRo@uAPgB~@]tATxCoBrB}EcA}AuFqCwFyFmAYoH\\}Am@w@k@gDjDoFxA}C?kD_AsBa@oD}BqC_G}C_FuEOuAc@w@sBw@sFeCoFcAuAgF|H{HlEgFrDuNbLwKpPiEfSiCtDeIzDgSd@_LLqIXe@lB{KvRsDrBcDp@JvV_A|LgApL]pLl@nHtNzI}AbH|Fk@lIdAhAxBVXn@nEVpDrDYdDQjAZlCdBbAf@vAhCp@~BvDwBdFuAfEk@nC_ClD_CxBcB~EsAvGgCvDs@rD?h@{DV[x@cC|@MzBJ~AL~@DxA?rASsAcEeC}AiD{AsEe@IYR}AqB{@sCi@m@[rAsEpDkDxBmClDjBnADrB]zO{A[sGDeEe@cDH_CbCeErKoRtCwErUkOrRaNbGuAdDk@"}]]}, "19": {"polygons": [[{"numLevels": 18, "levels": "PABAG?DDED@AEAFFFGCD?CBGDEFCDCGBAEGFBCGBCHB@JBADGBAFEFCCHBAEDEFDDBFDAFADAHCCDFC@GEDDDLE@DAFDBDFBAACCBDBA?B@D?BB@AAB@AEBJBCFBADEBAABCBCGADCCFCDADAEJDFDFBCD@DBICBCFBBEADGCDFDIBF@CDFACIECFCGECBECGCEBCP", "zoomFactor": 2, "points": "_ncGwxayReCf@eF`BaGrBsF`Cf@nDXjCgC~@lAdJ{AN_@v@oAfBaIpP~@nDXlC_IzE}HsJ_EzHj@vIpBdGClG?jHbA`DKzAmG\\e@fCkLcCuAjDh@bAeB`@gBbDpAr@dE~F~@nBjAvOyN~@`@pCSdEeAxCuNqKkL{KgBIcApLsD~V{@jHaVqEkm@eOeIcBwEBgEyPaEuLeBiEoTSyCwE_C_Nd@wMgAeEwKcHwGsF{DmCwILyLaGaFwK}Je@yFoDmIUiITwD{B{CgIqBqEkKeDcWcHwFQqFe@yE}F{DgJiGcJqNaMwM}HyNyFkQqG_QcWuCcOj@sH}D}DsAaTnCkJlNmEv@ObBBdHUO_EgBQwAmAAiCxAeB`D{BT?d@o@d@L|AkCpGiFbEyGl@kAXkARk@nBcDhBiCjCmC~@y@`@GjCcDnAsAvAcArE}EpHoIjFwFdDiElBi@zCIjB~@pArB`@rCo@lCcAr@Qb@yEjAo@jBBdALVMh@i@f@BpC_@zD}BpGuEnD_DbBcClDw@vEkH`KaKfGcHdC{EJyC^aFfCmDjATjDpRwBpYwM|VeY~HyQnAw@nAKhELbBsCVs@lAa@xADzA~@fAnD`HjLnJjMbHhErJnHpH~G|LzD|JhCxEpEd@dGiBdNtApMxC~ItIfFtJv@rBUTwBFyAvDgJtFsHjJqFfHiDhK}Hbt@zVfFfJz@lGfSvKlj@|SzZhIbCF~K{BdL{@dOfDlG|CfKjHxIlJfDbGrDjKzBrK"}]]}, "18": {"polygons": [[{"numLevels": 18, "levels": "PBEFDFEHGBGAEBFBDCFBFBDECBBICEEAGAG@KECCEHFCBHAE?CFBCACBCFACC?CAB@IBDCCFBCCB@GACFABCADDCEECBCDHC@CFCADHEBFEHC@AEC?EKCDAFDBACDBGABD@DBDCDDF?BBEBBCIAD@CAFAAAFACBDGADBBBBCBFCBD@BDACB?CBB@P", "zoomFactor": 2, "points": "}xlGk}oyR|LgBtC_AzS`Ez@wInF}D`VHbXgOv`@p`@dj@aPhCa@nFdB|A`AxAbEFhCpA_AlCaE|CiBv@Vd@jKOxE`Km@lIB`@sB~ExA~BN`EOvB\\bCpExF`ToDpAvD|J~IrSwKnIkJdIzM~QzKzNeIxGyAgA{GiAgJa@yNnBXzKlIzB~I`EdIdFyPfQiNvM_ExHwGxLkGnIK~@tBjFB|A^rBh@Lb@|@_@dAsAh@cBjAa@i@oBv@sAn@k@p@{@Xk@l@]t@u@RsCKmHiDk@iAoEiAAuB]y@fAiEUs@JiAA}B{@fBUnAaC~AuCoAyCw@qDa@}Aq@oCiBaE@o@aBeDaAaAlCqBmAeO]yBZk@uAyLBeChEwIxHiJvIaGlD}Dx@_GFiPl@qGvBcCpE`@lEfC~IrGbHt[tHaJvHwEzBiKtFiAz@kFrHiDtIQZeHHmFi@mCcB}AsCm@yBiB}NbAeGb@YZ}@LeFe@yCeAoByBkBaAyAaCwA{K{CyHaCeGiEcHoGl@s@_@s@{@z@kD}CiKmN{BqCa@CiCmEJs@yBgFeFqPq@wFB_Bh@_Dx@gAnCqE|CkDxD_DpU_KxC}A~FoBvDkBpBaGlCaGfD}ExH}OrFoEvDaKdEgJl@uFnAqCJmCbBuGUUh@cCj@Y@}As@I_@c@XW\\Gn@uAFaGMcCp@qCLmFD}CQkC[MI{@DiA"}]]}, "06": {"polygons": [[{"numLevels": 18, "levels": "PEEDGBCFCBDIEDAFCECEDEACBHCEAAHBCCBAFDAFP", "zoomFactor": 2, "points": "cg|F}kzxRzClCjH}L{CcBxJwOtCpA~PdEbJd@l@`DvEdE|Aj@\\fCw@`GiE~BwBGaG\\_C|Fi@|E|CpJQnB}CvBqCYe@jACn@z@jBJ|A_P_HmEm@uJ`@wIp@gCDC{@~BiLfA{@PmEd@{BBmCiBvBgBe@q@k@pK_N"}]]}, "07": {"polygons": [[{"numLevels": 18, "levels": "PBDB?DBGAABDCCGC?@EABACEHDBICEHDEEEP", "zoomFactor": 2, "points": "ws|Fm}yxReCqBoBw@uHeAuBKaHKoBc@aBmAJcAbCeGn@uC`BmC{@aAr@mAGsBqBcEiAoAeCaCaCqCSmAFgAaAkEeAcH\\kAoNgOrIoBtFwCtLsIt^hj@~L`OlPzI_K|OvChBeHjLyCgCmKtM"}]]}, "04": {"polygons": [[{"numLevels": 18, "levels": "PCADCE@HAACICDDICACAEDCBDHP", "zoomFactor": 2, "points": "otmFy{xxRrHoFxC{DtHeIlIoFdEmAlE{GfFuI_\\ef@{@{@{OyUeEaDqK`DeErDkm@fQY|AbAfBPhG?~IbAjL`@`COzOeAhCOdE}AbEz@tAx~@|L"}], [{"numLevels": 18, "levels": "PDBBBCCEABC?FCGADDFCAADACACACIC@ECEBAGCCBEBADKEBCBCBGGHAFIDACBGEAHBHDBEADF@JDBCF@CGEBAFEBF@ABGCACGP", "zoomFactor": 2, "points": "iauFouqxRvBCHs@rAk@lC{DfDyCjDiAdDuCpCyCfDoFbF}FzBqEtAiCdMXz@e@j@wBp@qA?}WbDaGtC}EhGqF|ScSrBsAfHmJ|CaDKg@F{@bA}AdEmEjBeEUiDs@mAaDaEjA}GOeEaCeC{B{DeE}FwDcCqAiCqCeBeImJeI_EeMeIgOoIcEi@gFrK?~Bh@|ChA~@\\hAp@jF?jDcb@o@_d@ze@G\\n@xb@pTzd@{DrAkKOsFJqCi@yCNmAgJuIiIcZwZkQlRiMzO_FdN{@rOw@vFkFdL_NdXiCrKm@hTiAth@bDtApGoB`M{FfF]xNzDdCf@zBEc@qJbBiFvBsDh@g@rGdCyAnHQlEhDIfBBp@MpBNxB_@zR_SfDqCOo@|d@tC"}]]}, "05": {"polygons": [[{"numLevels": 18, "levels": "PDCDDAA@CG?BBDDEB@BDAACADAC@ICCBDEEIHFFCDCIEACHHJFHGJGDGCCBBB@CCCFCCACCBCFCCAEADICDBDCDF@DGGAE@E@DLGCCAHEFEGFDFDHABEBCGABHDEBFCDAFBICBDECDGC?FEFCECFDCGDB@GEBF?ABBFP", "zoomFactor": 2, "points": "shvF}vqxRlBa@~BtB`Am@nDlELKd@RbC@hAFd@r@uAtBm@dAaElDoKpM_Cq@yI~LPf@K\\i@t@DpCQDSKkATW|@yBpCGPTj@mAdCiHtPr@tA~BX`GpCXr@nBk@xCxJbgAlf@gQv\\{jAal@|AyUgFgCPk@wBi@}Az@nBrDih@|cAmAdBFz@peA`h@glAjaCq]oQuAsVrl@amAo_@wQ{i@zfAuWcLeBz@s@|AeBh@k@dA_C|AoF`GaC|AqC~ByCrD`@XyCvBa@a@wI~EaGlBsD~AmENkAz@aCX}AtAa@vB{D`CsDtE_BpCq@rHeAhGuEfBeEN_J_CgUqJeMqGkOsDuAh@oFaDyCbA}HbDcE{@~Ic^cHa@kD?sKoFuIwEgBPqGX}HoBpNyYvFk@bOlAhZ{@hC?rDsOeBeIea@cOrAkDxUuIlCxErOrIhGz@dKkDnHeMxQmYvD{EpCyNzDsO~AwBvBzBxE`E~@`@xCwFz@uJoAiIQ{GYcAcCMqCXqCj@{@{EGyCvFcA~ERxCe@zMqEfY{MtY}JlL_JvFo@zRGnUQ~ImEPkHnAUlE|BxHsBjLyFfFYzRbF~BK]qJ`BgFrBoDf@m@dGfCqAjHYlEpEGpA?h@KrBNzB]hVcV"}]]}, "02": {"polygons": [[{"numLevels": 18, "levels": "P?EABEFCDDEBIEC@BBD@AHCDDDCD@CDCDECFCCAP", "zoomFactor": 2, "points": "evwF}hzxRlCxHdAdDHvEg@zKHtErGnGLpQeBdCH`PiDHFbSa@jBoU{M_AuCgD}DuAkB}BgFeDeEeCcCuH}GcGsEh@m@pAl@lCwDnAt@|BaDq@q@fCcBfCqBrBRfGcFx@LBqCtBCpBxA~DqEbCoKtAuC|@kA"}]]}, "03": {"polygons": [[{"numLevels": 18, "levels": "PABEECCFDDBEHECAAGCACCBEC@EEECCBHFEEDAAEFCCAD@DF@EFDCEACFCDAHECBEEAADBKDBCCCBFDCDBBAEBDIA@FDBE@AGDDBDIECFDBCP", "zoomFactor": 2, "points": "gl~FoxnxRz@kClCmFnBoCcEuCxAwBs@q@rEyFsFoDh@uB_FmBcA?i@{HbEwEtHUnJx@rGP~Fj@t@kCbDcCnAyAvHuKvBcFjDoFjAeI?iGGoBpCj@hCyNdGwEhDoFd@]v@FnAsRiHIn@}LxCEHaCIWh@}GpCDCgFgAuCeAoLSqFnAoJn@_Dw@iMhF{BlCwAoFaCh@iB`Dx@jAg@hAyCrAgFVyHsA{CsCeBUeJF[`K`ElCaAbAeCl@MhBrDvEH`FYrCDdCtAbABuAhCvA~@l@fBUjBrBp@BpAp@l@hAiAnAvBlKpEbAEb@j@fDSVDzEfG|@nChWvOqS`UkFvG_EnEiEnMq@fMcArI_FdKcJpQ}CjHuBjJ{Bb}@k@YaB\\GfH}InEsi@^uFl@gL~Iu\\lLgTdK}OtF"}]]}, "01": {"polygons": [[{"numLevels": 18, "levels": "PECCIDDE@FDHHFEJFCDF@CFEJCBEAFBBCBCCFCEDC@DDADDDDDCHDCJCCDC?DFBCCCCDEB@FAAE@ECCE?HBCEDECECFBDEHCACFCP", "zoomFactor": 2, "points": "km{Feg{xR_UsLwUw[yUy]uAsDfB{@bAfC|H?dFbHhGtHbKtAzOeAgFugAfUrDnMmBrO}L`OeAjSnQ`RnTtEtArKzOvXx`@nQtTfNmIfBrDiNvIHz@{GrDgBeAi@i@cLlW}ApGuDvI{DdFmApCoCzKuDlEqByA}BBBpC{@K{@h@mExDwBQcCrBmC`Br@v@wBtCqAu@iCzDuAs@q@z@rQrOpGjHdC`GgDXYs@cAHoKwE]q@q@iAmAlAk@g@GoAoBo@ToBs@mBoAo@tAmCeAG_Ao@mAi@qCIeFXeEKqAwB]w@{@FkAlCaCz@sHyC}Ak@MsB_AsBh@aBlCXjD{BXwBcDmJXiEhCmGnF]hCHfEyB`AuGc@_CoCgBcDmCo@eDoJk@gQeE"}]]}, "08": {"polygons": [[{"numLevels": 18, "levels": "PEBAEBBDBCHB@ADFFCDFEC?AICECCAHAAE@@@BP", "zoomFactor": 2, "points": "er~Fy||xRtNjOUz@dC`ONhCtC`EzCpC|CnFCnBw@bAv@~@qAdC_AtC{BdGQbAeGtGgJkFs@pAz@hAaI~KwHcBcDzAuCjCmGtF{@h@iGyCkDcFsFaKgDaMwD}He@}ApEmHjHqMnDuF|J}GdK{GvG{EfJcG~@M"}]]}, "09": {"polygons": [[{"numLevels": 18, "levels": "PA?CEFDCGEFBDC@DBBDHABCCBGBAECG@ECDFECDEJEDF@?E@ECBB@FBCG@@B?CCAC?BDBGADIBBEBC@FFFACBCCGCEDP", "zoomFactor": 2, "points": "et_GmhyxRtByAjE{DfD_D|CsApHfBlIqLcAcAp@kAbJhFpGqG~AdAxBl@fIDbCR~Fz@rB~@zDhDfBh@~AiB?nBe@rBUlEy@v@mChL@lA`D@pEc@jNs@pEr@nPjHCVNzJrCxAtA~CYjHsC~JgAf@kDw@o@vBnF~BoJfEd@lI{AjAeHbByBr@{DdAkAyCQm@uCnBwCx@iEd@oFdBkAj@\\zBM|D{@nAwAqAmA{@c@e@oB_Ak@[Yf@o@s@{B_AsBi@gA_@eALi@_AuE{BiFdMk@nBmB@m@s@wBi@kBiB@oAcA}F_AyCa@w@jDoKyKp@oBoFkAyBo@u@w@QyD}HuCkCzEgGJwB_Cq`@{AiA"}]]}, "28": {"polygons": [[{"numLevels": 18, "levels": "PDDEFDDCFDEDGBCDFCAJCFBBCDEBKBDEECDEBEBCG@DCCBDBECECAD@D@G@CBCADDDBACE@BBCA@BBEBCA@C@C?AFAC@DBB@@CDABEACCBAJHBECGABBBGBFBEEGCIAE?@FP", "zoomFactor": 2, "points": "eulGil_yRuAuAqJXuLsGuEmKsJk@uFsDmIa@iIh@iEgCeGsOwc@gMqN{@qE{FmE}JiGsIwM}L}NsIgU_IaIgDyNjDkFtCgF`KY?aVne@WfCoa@~q@cAhEuApKPtFfAbHrKxTfHvIrD`@zBe@fJjLv@nBxClCG~@o@hAXlEv@p@dElCpCObCl@zCdClE~BbGtAdEXr@r@]pCzF~DvBBz@Pr@v@tCpE|Ad@z@LpAbEXzAd@\\j@MnBbDtA|CbE~@s@zBdCvCdEzB`BjAfAWlAlBzB~CMPlAzBt@f@~E|GJZVG\\h@fBpEp@r@T~@G^l@tDbFlNBTHN|AlB@Nx@\\Rf@P]@a@dC\\EVh@Hd@Ef@Fv@dAXMTHbAu@x@nAx@r@vBf@hBrC?h@P^|u@qViH_KyFgLsBwHa@}HnAEjb@zAn@YxAj@h@MjFsFrGiK{CiBK_@`EwEd@aU`VTvM_AkFsXiCsOe@qYo@g[OwEaKwH"}]]}, "24": {"polygons": [[{"numLevels": 18, "levels": "PCCEAECDGCDCEBCCACCCCEICBDEH@DFAEIAAFCCD?E@BFBCD?KABCBECCCGCCEDDCDBBBGEACCCBBFDBECCECBBECBBCCECDCIDECCBEABBCCEAFAECDCEDGCBCFDCCE?EBDEBBD@FCC?EDGCBECBEBDCDCGDBDBDDBEACB@BKDCDECFDCAD?DDDCCCDCCADDCBBHCBE@BECDEFDCDFDEBIDCDBGDDECGCEFDGBP", "zoomFactor": 2, "points": "_nlGuicxRwBr@uP?aDdAej@uHkDYyJr@gCbA}D{@}EtAiCvBmEa@yCbAgBz@kE|DgBGeEzD_C|A{GfBu[vQeF|As@tAePnBcH{O_CaCi@kAbAoBgg@}i@mEG}E?_o@ePePnB{KfBsSoBaDh@cDdA}LvB}AvB?tA}HbH?bAFvBsHdE}DlBsHpFQtAwBlBuEzKs@rGq@nFFjDNz@a@xRj@|DFxGtA`G?lE~BzGr@pGfJzRrDrD`KbStHvJlIlEtE`GjDvInFlEnFpG~ItHbDrDxGzOHtEQz@bA~AWzDz@rDYlAXdBdBXPrD|AfFhCbAxCi@Xh@uAbDQtEs@dA?|ApCjAz@xBlAbA`@~BtA`@r@nB?nBz@bAoBnFPr@lMfJtAkA?r@nBbAbAfFz@|A|Dh@zDXfBr@~Fz@dAs@hDb@vBxCtApCdAeAp@}AdAXbApC|AYxJtAvFcAj@kDbAr@`@jDOvBr@dBfCz@`CYz@}AbAFpChCpCpCh@rDz@fB`Ch@mAvB?j@cAp@p@hCj@xCjAdAfB{@tANhC`@bEbDdArH~MeBjAeAbDO~BdBrDX|HvBtAOdBgBzGHvIlBvFcAbHFjL~E~EGtA`@`@`@XvBzGpCrAYdAFXnBh@|AlAr@Xj@h@vB|AtArDuAPsDcA{@`DsGtAP~BuAmByFbAcA`@_CFwB}AqCcA_Bz@cAgBoBXkD{@oCXgB{@mAG}AbAs@GeBF}AuAYz@cLYeA`@oBa@{@hCWvB`@`@`@hCyCtAoBnBmAlBgFi@iGnBoFjR_N~HRhDeAnGoFnDQOwB}DgArMmTReAcDaIyD}AuBaHuGsE_ByBr@ePxFaTbAqd@nHsOP{DgDgJ_H{ImImf@T{g@cBmSuXw\\_BmA"}]]}, "25": {"polygons": [[{"numLevels": 18, "levels": "PCAGGCIFCECGCDBCECIBDAE@AG@ABBDACBCB@CBBCBAAAADBAC@G?CBCBBE@BABBBBCCEBBJCEBBCCCCCBABFCD?DACCBECCCCCHBBBEBCDBDCDECBECECCFBD@BC@HFBDFBBDGFFFHB?AGEEFEGCBDAKCEFABHD@IFECHBEACAFDBGP", "zoomFactor": 2, "points": "oprGidixRfAd@dc@~@jD?mBpd@~\\|C`E|AaElPwMcAkF}AmCBkDxCmBxDuAdIa@xIBjIcBzK_EdGiExCiGz@uE?mGmA_Hw@iEv@{MpCuWhGa@m@aDoDo@mA}AcAoB{CkD_CuAuAm@Os@V]WFYCg@m@Ys@TiAGyCeCY?SS]C]c@U?cAkAEa@uAwCq@Sg@Y_GbAqCj@qAQYa@oB`@aBlAyA?aBp@aAn@cAv@a@r@uEhBo@r@kAPwCzBcJ~BwBfBuAYi@iA}Am@cBkBCaBz@s@LuA`BoBGkAnBiEbAC|AcFjB_CbAcDj@{@`@?_AeEmACJiB`@eE_A}AoAeAUqCw@a@QgCb@c@o@eGh@]C{Kn@iBQ}Lq@uAMmAuCuEFs@{@e@{@h@wDe@{BiCoBkA_CNgBmC_CCQoDe@sBcAuAcBTiEw@gEcCeCqEkDiCq@{GaAyCaB{BoB_DkAyCqAsHyAuHdIcEUo@mEiCwBwHTwG~@mEd@iKw@gHzNmCuAoZ`QiEqGc[}CaLsBqEaCwFkC}HyStGrBdGuJnDcCcHcFf@}AiEeIoKqEiEkBeD_LkXrMsFjWuHjSkAlo@~D~D?lJr@vHhCn{@ps@vt@jm@oUpk@mAdX~@vV|C|P|DtJfHvMbHrIjH|JxGnFvGpG|CnIXxGa@fD~a@G"}]]}, "26": {"polygons": [[{"numLevels": 18, "levels": "PADBFCCBICFCADGCBAGECFBADBDDAKCBECAECBGB?DCAHCEDBHCBCCEA@DAFBABBEBBCIDCBDCBFBECBD@FCACAAGBCAED@CCGP", "zoomFactor": 2, "points": "ognGazxxRbFjHvMvP|NvMbFdDxCpFvBxLhGzKlE`KuE~@eY`MqEdEiMlVoFpJuFjDsHBgHmAkJ_AoBCkDjQ{DlE_JnF_Fz@}H`CiKrDaKhGaGfFaSzHcOrDcPvEF}DcDmIcAgFtAiKvB_JhCeINmLuA_NO}HbEqJ~EkI`DgFfC_HpAyFz@eHhHvDpQhFlI|@hDmAlAaAJoAYs@m@Yd@CgAmCsB?oBYaCOkA}BcAcA{AmEyAgHWgDc@BGa@`@a@YqAPkCz@_Bz@{@xCnDHfBp@bAf@KjCjDhA`@vDIhCXh@e@Y_AHaClBcAfBs@`Bj@Hh@Qv@r@d@`DlAd@`@fB}AdB}C~A}F`@i@eAo@GuCB{@`AoBYaB|u@gX"}]]}, "27": {"polygons": [[{"numLevels": 18, "levels": "PCEDAEBI@ACEAEFCADGBD@DICBDCDCEECGCEBBG@BBBFBCAB@DBA@C@@E@B@@B@BAA@AABCBJAAA?CA@C@ABDA@CCAEB@BADBADBADB@GB?ACAAE?@@C@AC?@DAB?B@AA@EC?BCABB@EAC@CAB?ACBEAEBBEADACCACFABCFDKDCCAFCEAF@EBHCBD?BCCDACECE@FECAJCDAECGEDDDDDBDD@ACBJFDFBBDGFFFHBBGEEFEGBCBDIBFDAAP", "zoomFactor": 2, "points": "gayGkvrxRlEcO|H_PbLsObNwKzGyEdBuF?yAhPj@vTh@l@PbAw@fDjApALa@vF|EP`GtAn@\\dZJrD|Fz@zB_A~IUhAfB`BrDuEl@qChAgBfCYbFwDjFkHr@iEhEb@jJuO`EaLvAuKO_IcAaDaEsGmAeEhDaA~Ai@^L`A}@r@CZkAGuAOQi@GIU@]b@]f@oBA[T{@Go@Y}@UgAd@cAFi@V_@^WLSFSG{@X]N}@Zc@fAkCn@oAXULkAh@Mb@s@Bo@Ik@SSAs@E]U_@c@[u@[BSV[VIHwAMaA_@qA]s@aAYLaAK}@m@o@cAWw@MWe@gCuA^i@@m@Ms@{@q@qAGOOXk@?m@Mk@u@e@Y@{@Lq@Ik@J[^_AP[i@{AqBq@q@_@u@}@o@qAs@eBq@Y_@yAyA{@oAc@OgAJ[Ya@W_@Fc@I_AROGo@AkBaC]Ci@?sE{C_@o@iCqB_AcBeBaBcBqAcCgAsBk@gAD_CIsDgA?SsCw@kDiAi@]mCGcAa@aAwBmDkFmEQw@`@aAKa@_AGyAyAeAoBq@]{AcAe@uE_AUiAmEHo@Nq@Y_D|@cJ}OoF{DkH`@iNzGeIpGeIdEcHlEkH`HkDxFi@rD}Hv_@sHbAuEz@wEbDmEnFkAhGaCpGqCfF_C~B}AtAuErGoBbEX|AiCbD}EfFsDpGqC`KYhG}AjDgXti@cAt_@oFvMa@rDmA`GXlTvBxUi@dEs@xCjD`VnFpUlItIs@bDtA|Er@q@~BpGr@s@xYph@vT|^`OlPzDbHvIlPbCnDlA?h@r@lHaE_FaD_CgIX}G~@qEd@cK_AgHdOkC}AsZjQeEyGc[kDmLqCaG_FeN_SrGtB|FeK|DeCiHgFd@}A}D{GkJwFmFyA{B}LqZxLgFvXmIjSmAfUlArWlB~EL"}]]}, "20": {"polygons": [[{"numLevels": 18, "levels": "P@A?FAHBBECBDCFAIEBCCAD?BEAAFCEEBADDAAAHEECAABDAH?DBFCFE?EHBADFBEABJCCDGBCHBG?DIBFEFDEDKEHDGEEFCGBBB@FICD?E?CCECCADBBCBI@CBADD@BFBBCBBBBFCCFCFCHC@AD@DBFCCCEBGCDAC?CP", "zoomFactor": 2, "points": "u~hGu`sxRtA|AfCbCrGpFxCjCpGl^lAtEhCFrAo@rEGfHsFfCo@jDO`B}BlGuCtDsHvFwMoFUzByC?_AxA_Az@sBr@gDr@a@dD}BpAyAtAcPr@}D`@kFmAeD{BiYtCkQ]sD?}J\\{ImCqIHsDVsBBkARaA~Kq@tC~EnB}ApAQpA?jAW`GoBrDEbDWKaJKkFgA_GeAaCsIeAiGt@dBmHsIcF_DqBs@qHd@}MvAqNf@iJGyVbD{@dDaB~CaGlG_KXwAkHh@iP~E_QtCuMc@mOeLwKaKwAKcArLqFh`@gaAmTyLqCsEFyEmQgHeReTa@gDuEsBqN`@kMoA{DiJoGpAd|@dKri@uNtAcUa@i@~TiElEfDbCiGzKoFxFs@FuAe@o@Tgb@uAgA?`@fHnB`IrFhKnHrKlGnJdE~E`GnHfNjMjF|C~C`GnBlLtM`XPv@hCnBjAbC`CxAbA~C`BfC~Az@fA`@bAKn@w@\\K`@xAxA\\~BXzCI\\m@g@YDg@~@m@B{@xAs@nBwB\\mAfNtDXfAv@Qd@}Aa@qPnQ~@hPm@bAlCBlBGbDYdEj@|AjAlC]zFHpH~@jAlEhAhEzDlEpAz@tAh@tEqAnD}ClCeC|AgHxCiBzBw@hAqCpA"}]]}, "21": {"polygons": [[{"numLevels": 18, "levels": "PECFCADBBBDDGCEAACC?BJCFBCEADBGBEBDBBACABBCAAECAHABDACAFB@B?BD@G@AACB@DAACBECG@ACECBJBE@BDFDABDDADBCGB@EDC@GEBFCAHC@CACEDCGBDBGD@EEECAEC?CJAEGCDFHEFDHCCGP", "zoomFactor": 2, "points": "yycGsqhxR}K{BDaCyAoEgEP}H`ByEvA{GXaPCoIb@sNA_LhDmFM_Cm@oGyH}Dm@aDaAiAGoFsDiE{AeBi@uLmC^{HlAiDnGNxFQdGaApCeAdJwEzP{DvDUt@kFQuA|BcAbEgEEwAh@mADuAIe@^y@JaA\\HTg@M_A]_@FUb@m@nBO`@FBOu@mBPqAwBcByAi@}@kBCq@`@_@XkAF_ATCRIxJoSW_B?]QOaAQa@e@o@OmBWoEA{AFeBe@qAcA_Bo@gBRk@QcCuBg@}BLyB\\}BD{Ba@}@nCeEzFkF~BmAbDo@lBJlAhAfBrBnChBzLpE|DcCdBXtHf@pGHdJsArI?xPXvAs@t@@l@uAxErAhBx@rGhDmA~ELjArApAf@X~DGYgIw@uCjBo@nDMtGDxAzDV`EJ`DTLVCDdAcD`LZvDrCbE`KUxFcA`Bq@|AwAzC`FvAf@|AXgA`EjN`EW|Ad@pBv@hB`AnAzBn@xAf@vEhFuHdLoGzKaKrDgG}@oOiIqCaF_VxIwAnDda@rO|A`IkD|Ng^~@gOmA{Fj@{N|Y"}]]}, "22": {"polygons": [[{"numLevels": 18, "levels": "PEDCADFDEBHADCDBGDAD@EDGCE@FDFHCFDEKDAAGEAED?IDCFBAIADGDBE?DFBGBEBHFBEDCHDD@FEABBDIEBFCCGAAB@CCACBDLCA?AFCABD?BBCBCGEEJDHCBCF@FCDGDFBBFCDCDCAEDJCAEBDGEBDDGGBCDFDBHADFDFDEECHDDGBDLEFBFGCGDCCEDDEDCCCJADBHEBCDCDFDEADDDCIBKEDECDBGGFFDEADCAGBDCDFCCJDDFDECFEFDACAKDGE@ADDDEJDFBDHHBBIEHDECGCBCDEGDEEBDCCFDJDFECDEJDFBMDECGDCCCFEBHDFCDDDFCDDIBAFDFFFIEHEFDDGBDFFCCGACEDCHDBDFCCEDEIEDDDDDCGDECFHBFDDFHDADDCBJDCCDFDFDDDDDGAF?EHDDEECGDCFCFGEDP", "zoomFactor": 2, "points": "_klGwtxwRhRqN`INdDcA|BaBvCoCtDSQ}BwDeAvMoTN}@c@cB_CcF}DcBsB_HaGkEmB{Bv@}OjDkLhAmFn@s[VoH|H}OPiEsD{I_HcJ{DiViCqNTym@wBsMwXw\\|LkKtPoS`GiRzDuYlPiTdRdVdGjFrUdR|Y~TzKhC`PmElNgDlITbFdBzDxApCsKBsOnDaOtT_d@`Pu^tNeZbAh@nFpAhJQmCbBo@xAOzB{EuA}Ai@sBfAmGbL_HxOX~@fFrDJ|Jv@hGhl@wDtFuHbA_ClE`@xJmEpCKbEvDhIh@zXjMbZlNpNmArB~BrAvBb@LbArBxCl@lAwHaCsGgCuEh@aDfFaGfBiEtGsBhCmApG{B`GqA|EoA`@{@`GeA|C{@G]lCgAjDF|AvG`@nHXxCn@fFl@`KcA|AmAlHcCrLcBxFuChRiBfLQrDqAdE_EjZFhBqCdLpGnJdCpd@Uj}@jg@n@lGoBBmE`@a@tDySEwBoFqAi@UfCeKXwIxJoS`KyE|ScBhRwQ`@mAjJgJj@{DfAuAkAw@J_FnBgCCeAVkArZsZzCNnFnFpClE~BjFPrE~@bGzDlH}EtE`@zDUtAqA`@uEtWtPbSj@{BJoDa@_CbHmUhEaB|EfApClA_AdE}AfFl@bCzGfDrOnQKrFtKhj@hWji@nQvp@`DpP~y@xb@tHXzJzEf_Aj_Ah_@x]~@tEmCtHsW|JaG?sg@nDgo@`VuLyWyAa@wc@~OwBlCqTvIeC~Bmc@|OuHU_U|HqCzFiDrB{C?yE`EmCB}Sc\\gu@olAq[yk@eLiV_EuU]_Nv@mAYeZFcB~@q@aDky@_CBkDmGN_HT}AgAkA~Bo@dB}F]{D}oA]sOPsDdBxAnDjC]LbAwBXQvETJpa@w@j@|f@nMpQU|UeErJn@`ClBjLKjMP`DfC|WxF`L`DbJC~DdChCrFnXpIlIHpAr\\bb@uHrHoAkAgFlC_Ubd@yApLoDpCoV`^sFzEgSJgWtUyN|QmGxImGbHwMjMzXtNzFUbSqPtYmL~ViKrBgAnFc@NiBnjAqh@jOw@pLdD|IhLDdR]pP~BtEzoA|C~Ohb@fL~\\dh@jsAnOLjrAmf@`ExArB|EFfK|A`DrDLfDgBpLqCt@cAxO}ArL|AzCvBQtE`RdI|AfFvBbDFxCm@z@~@dE|HbEnFPbCcD`p@mxDOeKwB{AuCHg@qCdEo@zDtAxBrFqo@d}DmGx[gFrGwMtCcAqAqHYgA_A|Aa@bAz@pJGfFmAhG_FB_Ge@}AoBqAiIXwC{G{DyCsHyS{C?}EgNoHQoDv@mEeCmHCqMnDiAn@}LpEoBpGtAjOkWjDh@fb@_RtA`@ma@{G}HkDz@m@fSsTGkAlBeLX}A{B_AUK_RcQ{@?mAbAYq@gFwBFuL~A_g@~BoJa@{@yCmAQgCfJXhCrAhCkAvBxGpCbDfF`GpCpCeArLpCgC|Dyd@cK?gCmEk@qNgJkDFoBgC}LqCmEFcHwItAyCwBcAiGsOcWiNmIeBqNuAeX~MaKfBIvBoUiCXwB{oEekAc_A{VuEFmLoFa^kLsl@_QiDmE?iCmEeI`@eBkDyCuH?wBdBcA}EfBs@mE{KbAwB{DuH?iKuW?uHNqGcHiCyCiKwBwBoFvBkDcAqd@mEqGNiRtAyJ}L{DuAiC{Ds@uAqG`@{DaOQxCyJ?sH_CeE"}]]}, "23": {"polygons": [[{"numLevels": 18, "levels": "PECEHECBDGD@FGECICBECBJBDCCICA@DGDAABD?CHFBDA@FCI?BCC@E@CGDDABB@BDACFCELB??FD?DI?DE@EGBDI@@EDFCICC?D??EBBAD@@DABDA@CHABABCBAC@C?B@BC@?DADBCBAEC?AEB@BABBDE@C@BBBCDBBBBH@BA@B?@AEBDA@AEBAD?ACAB@CA?F@?BBD@@DA@CBB@C@C@BAE@AAC@B@ABABA@EABAA?A@AD??@CA@A?AB@@CBFDBP", "zoomFactor": 2, "points": "kmtG{sdxR~g@mL|F?nQzBjOiE|GqKdA_HJoMz@yN`CkHvFsB~Dd@xOpA~DsQpWnFdQ}A|QkDk@qNeFoZgBuPYaVXkTr@eOzV_AzZmCv\\eErk@kLn\\cDhAhI\\lLBjJJdE~EzTxCbA~Gi@lCk@rBClBw@rEFlD?tAdATrHcCz@iGdAeEN{D?wCGgAjDa@`IbFjAnFlAxG~BnFjDhEbApEz@vBxBbDvDzBz@xFFxKaDzEM~GFlIe@vIB|GCdEY|EuAtH}A~DKtAlECvBhLfCyJnRsMpXeR`a@_G~LsEtPCvHGjFeC|JcGwBeCw@gJS{OrDuNrD}JeCmY_TcWySuYa]_DxDoI~KyAbB{D`Z{FxQaPfSeMhKcBeAwBn@cHWoM_@qL}A}KqAuIiAyEsBcF_AoEoAc@]o@Zq@l@_@L[E]g@aEe@_@y@Ea@BUy@WWLCd@c@TeALWf@kCJUNATq@WKKEP?PUPsBj@g@v@kALc@?m@F]x@K|@k@PWSg@x@wAv@}Ad@yA?_@c@m@aAQ@Tl@WPSZRBAR]ZAl@kF`DiAJ}@?u@n@g@V@^iAb@?VwEzB]IuGxBsBlA}AEg@Ze@[OQy@@a@MKDc@KiAe@eAQ_@WIsAb@u@SIQ[CQsFcF_AXo@bAM@IGGUH[w@QiAm@]a@AKg@IQ@QJ_@g@eAgCAIUFSYFUh@q@\\w@]UIFQEQUTi@SKUYu@`@U@}@i@kAaA[H_@GGQ@QQAUc@DMByBCKUGG[LAPi@YeBFEAa@{A_AQPGEFIUMOMKBSC]WISEa@GW@WMOMCGDMQMS{@m@KSBGUWRk@]o@eLfCk@a@Lq@"}]]}}};
    return allDistrictPolygon.districts;
}