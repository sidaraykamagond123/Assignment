string1='CITIUSTECH';
function questionEight(str)
{
    vowelDict={'A':false,'E':false,'I':false,'O':false,'U':false}
    for(let i=0;i<str.length;i++)
    {
        if(str[i] in vowelDict)
        {
            vowelDict[str[i]]=true;
        }
    }
    count=0;
    for(let key in vowelDict)
    {
        if(vowelDict[key]==true)
        {
            count=count+1;
        }
    }
    console.log(count);
}
questionEight(string1);