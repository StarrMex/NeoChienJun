const disneyData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below
// -> index 0 - Low     -> index 1 - High   -> index 2 - Open   -> index 3 - Close  -> index 4 - Volume

// - if close > open
//- if volume > 100000 → log ‘Strong Bullish’ in your console
//- else → log ‘Bullish’ in your console

//- close < open
//- if volume > 10000 → log ‘Strong Bearish’ in your console
//- else → log ‘Bearish’ in your console

//- close === open
//- log ‘neutral’ in your console

if (disneyData[3] > disneyData[2]) 
    {
        if (disneyData[4]>100000)
            {
                console.log("Strong Bullish");
            }
        else
            {
                console.log("Bullish");
            }
    }
else if (disneyData[3] < disneyData[2])
    {
        if (disneyData[4]>10000)
            {
                console.log("Strong Bearish");
            }
        else
            {
                console.log("Bearish");
            }
    }
else if (disneyData[3] === disneyData[2])
    {
        console.log("neutral");
    }