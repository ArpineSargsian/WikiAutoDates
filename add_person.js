var t1="{{20-րդ դար}}_{{Տարին այլ օրացույցներով|{{PAGENAME}}}}\n\
\n\
{{Սկսվող տարի|{{PAGENAME}}}}\n\
\n\
== Դեպքեր ==\n\
\n\
* [[Հունվարի 1]] - [[Սուդան]]ը անկախացավ։\n\
* [[Հունվարի 26]] - [[Փետրվարի 5]] - [[Իտալիա]]յի [[Կորտինա դ'Ամպեցցո]] [[քաղաք]]ում անցկացվեցին VII [[Ձմեռային Օլիմպիական խաղեր]]ը։\n\
    * [[Փետրվարի 29]] - [[Պակիստան]]ը հանրապետություն հռչակվեց։\n\
* [[Մայիսի 24]] - Առաջին անգամ կայացավ [[Եվրատեսիլ երգի մրցույթ]]ը։\n\
* [[Հունիսի 23]] - [[Գամալ աբդ ալ-Նասեր]]ը դարձավ [[Եգիպտոս]]ի երկրորդ նախագահը։\n\
* [[Հուլիսի 22]] - Շահագործման է հանձնվում [[Երևան]]ի կայարանի նոր շենքը։\n\
* [[Հոկտեմբերի 15]] - [[Ֆիդել Կաստրո]]ն և [[Չե Գեվարա]]ն մեկնում են [[Մեքսիկա]]յի [[Տուսպան]] [[քաղաք]]ից դեպի [[Սանտիագո դե Կուբա]]՝ «[[Գրանմա]]» նավով, 82 ուղևորների հետ։ [[Դեկտեմբեր 2]]-ին նավը, փոթորկից փրկվելով, հասնում է [[Բելիսի]] ([[Կուբա]])։\n\
* [[Հոկտեմբերի 23]] - [[Հունգարական Հեղափոխություն]] Սովետական Միության կողմնակից կառավարության դեմ։ [[ԽՍՀՄ]]-ը միջամտում է։\n\
* [[Հոկտեմբերի 26]] - [[Կարմիր բանակ]]ը ներխուժում է [[Հունգարիա]]։\n\
\n\
== Ծնունդներ ==\n\
\n\
    * [[Հունվար 3]] - [[Մել Գիբսոն]], ամերիկացի դերասան, ռեժիսոր\n\
    * [[Ապրիլի 14]] - [[Տիգրան Թորոսյան]], հայ քաղաքական գործիչ\n\
    * [[Օգոստոսի 1]] - [[Անուշավան Դանիելյան ]], Լեռնային Ղարաբաղի Հանրապետության վարչապետ\n\
    * [[Օգոստոսի 16]] - [[Վահան Հովհաննիսյան]], հայ [[քաղաքական գործիչ]], նախկին [[Ազգային Ժողով]]ի նախագահի տեղակալ և [[Հայ Հեղափոխական Դաշնակցություն|Հայ Հեղափոխական Դաշնակցության]] անդամ\n\
    * [[Հոկտեմբերի 28]] - [[Մահմուդ Ահմադինեջադ]], [[Իրան]]ի [[Իրանի Նախագահ|նախագահ]]\n\
\n\
    == Մահեր ==\n\
\n\
* [[Մարտ 8]] - [[Դրաստամատ Կանայան|Դրաստամատ Կանայան (Դրո)]] ֆիդայի, քաղաքական գործիչ (ծ. [[1884]])\n\
    * [[Մայիս 3]] - [[Գրիգոր Ղափանցյան]], հայ լեզվաբան-հայագետ (ծ. [[1887]])\n\
    * [[Սեպտեմբերի 29]] - [[Անաստասիո Սոմոսա Գարսիա|Անաստասիո Սոմոսա]], [[Նիկարագուա]]յի նախագահ (ծ. [[1896]])\n\
    * [[Դեկտեմբեր 2]] - [[Պերճուհի Բարսամյան]], բանաստեղծուհի։\n\
* [[Հունիս 23]] - [[Մայքլ Արլեն]], (Տիգրան Գույումճյան), սփյուռքահայ անգլիագիր գրող (ծ. [[1895]])\n\
    * [[Դեկտեմբերի 6]] - [[Դերենիկ Դեմիրճյան]], հայ գրող, հրապարակախոս (ծ. [[1877]])\n\
\n\
    <!--interwiki-->\n\
\n\
    [[Կատեգորիա:1956]]\n\
\n\
";
var s1="Մահեր";
var NO1= {
    name: "Տիգրան Մամիկոնյան",
    description: "ttt"
};
var DO1= {
    day: 21,
    month: 1,
    year: 1905
};
var IY1=false;
//////////////////////////////////////////////////////////////////////////////////////////
function insert_in(before_add,after_add,text,i,add)
{
    return text.substr(0,i)+before_add+add+after_add+text.substr(i);
}
var M_names=['Հունվար','Փետրվար','Մարտ','Ապրիլ','Մայիս','Հունիս','Հուլիս','Օգոստոս','Սեպտեմբեր','Հոկտեմբեր','Նոյեմբեր','Դեկտեմբեր'];
function month2number(m)
{
    for(var i=0;i<12;i++) if(m==M_names[i] || m==M_names[i]+'ի') return i+1;
    return -1;
}
function addPerson(text, section, NameObject, DayObject, isYear)
{
    var add;
    if(isYear) add+="* [[" + DayObject.year + "]] - [[" + NameObject.name + "]]," + NameObject.description+'\n';
    else add+="* [[" + M_names[DayObject.month-1] + 'ի ' + DayObject.day + "]] - [[" + NameObject.name + "]]," + NameObject.description+'\n';
    /// + 'ի ' +   ||   + ' ' +
    add+='    ';
    var t,sect_name="",section_exists=false;
    for(var i=0;i<text.length-2;i++)
    {
        t=i;
        if(text.substr(i,11)=='[[Կատեգորիա') break;
        if(text.substr(i,2)=='==')
        {
            sect_name="";
            for(i+=2;i<text.length && text[i]!='=';i++) if(text[i]!=' ') sect_name+=text[i];
            i+=2;
            if(sect_name==section) {section_exists=true; break;}
            if(sect_name>section) break;
        }
    }
    if(!section_exists) return insert_in("== "+section+" ==\n",'\n',text,t,add);
    var j,section_end;
    for(j=i;j<text.length;j++) if(text.substr(j,2)=='==' || text.substr(i,11)=='[[Կատեգորիա')
    {section_end=j; break;}

    for(;i< section_end;i++)    {
        if(text.substr(i,4)=='* [[')
        {
            if(isYear)
            {
                for(j=i+4;text[j]!=']';) j++;
                var y1=parseInt(text.substring(i+4,j));
                if(y1>DayObject.year)
                    return insert_in('','',text,i,add);
            }
            else
            {
                var m="",d="";
                for(j=i+4;text[j]!=' ';j++) m+=text[j];
                for(j++;text[j]!=']';j++) d+=text[j];
                d=parseInt(d);
                m=month2number(m);
                if(m==-1 || m>DayObject.month || m==DayObject.month && d> DayObject.day)
                    return insert_in('','',text,i,add);
            }
        }
    }
    return insert_in('','',text,i,add);
}
result=addPerson(t1,s1,NO1,DO1,IY1);
console.log(result);