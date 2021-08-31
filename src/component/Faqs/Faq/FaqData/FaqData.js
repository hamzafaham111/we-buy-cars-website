import React from 'react';

const FixersData= [
    {
    title: "How do I know this isn''t a scam?'",
    text: 'That’s a really fair question; how do you know KharabCar.com is NOT a scam? For starters we are a licensed and RTA authorized car buyers, secondly we always pay cash to our customers before picking up their cars so there isn’t any risk involved.'
    },
    {
    title: 'Will you share my personal information with other sources?',
    text: 'No, absolutely not. KharabCar.com will never share any personal information without your explicit permission. We do not allow other sites to retarget or market our visitors.'
    },
    {
    title: 'Is that that true that you will pay me what you offered on phone or chat?',
    text: 'The offer I just got seems fair, but is that really what KharabCar.com will pay me to sell my car to them? One of the most important questions kick-starts putting cash in your bank! You entered the few details KharabCar.com needs to give you an instant offer in a flash; but now wondering if that’s the amount we will buy your car for. The best way to answer this question is the offer is based on the information you gave us. We don’t use the information you put in as a guide, like other companies. If the information you provided is spot on and the condition is average or better, we can and will definitely pay you as per our offer!'
    },
    {title: 'How much is my car worth?',
        text: 'Every vehicle is different, based on current market value, condition, and mileage. Find out your vehicles value by completing our onscreen form and get an offer in minutes!'
        },
        {
        title: 'Do I need to make an appointment to meet you for my car inspection and purchase?',
        text: 'Yes, we will take care of all arrangements for you. We make buying your car easy and convenient for you!'
        },
        {
        title: 'Can I sell my car to KharabCar.com if I still have a loan or lease on it?',
        text: 'I still owe money on an outstanding car loan. Can I still sell my car to KharabCar.com? In one word, absolutely! Even better news is, you won’t have to make the remaining payments on the payoff owed. We can go to your bank with you and settle the amount!'
        },
        {
        title: 'My car is broken and not running; can I still sell it to KharabCar.com?',
        text: 'In one simple word, absolutely! Remember Kharab Car means Bad or ruined car, Roughly 1/3 of all vehicles we buy don’t run, drive, or they have some sort of mechanical issues. We beat offers from all other car buyers. We buy cars, trucks, and vans with mechanical issues, those that are damaged, and even non-running vehicles.'
        },
        {
        title: 'My car doesn’t run and is ready for the scrap metal yard. Can I still sell it to KharabCar.com and will you pay me more than I’d get for scraping it?',
        text: 'Yes, we can still buy your car and in most of the cases pay you more than you would get from selling it as scrap metal. We buy any car in any condition anywhere in the UAE and Dubai.'
        },
        {
        title: 'Does KharabCar.com buy vehicles with RTA / Adnoc Failed Certificate?',
        text: 'Can I sell my car with a failed health Report? Yes, we know there’s wear and tear on a car and even times your vehicle will need repairs outside of the normal routine maintenance services. Automobiles also get damaged sometimes and we specialize in “less than perfect” vehicles. We buy any car in any condition including those with a failed Tasjeel report, frame damage and salvage, a branded title, and cars, trucks, and vans with previous repairs or repairs needed.'
        },
        {
        title: 'If the ownership is not in my name, can you pay me for the vehicle?',
        text: 'Can I sell my car if the title is not in my name? Simply put, no. KharabCar.com can only buy cars from the registered owner on the front of the registration card.in case if you are not the owner it is only acceptable if you have a legal attested power of attorney to sell that car.'
        },
        {
        title: 'What if I owe the bank more than what my car is worth? Can KharabCar.com help me?',
        text: 'Yes, absolutely. It’s not unusual for a vehicle’s owed loan balance to be higher than its value.in such a case we pay the agreed amount and customer arranges the rest and settle the loan amount.'
        },
        {
        title: 'I have a brand new truck I have won in a raffle draw that I have to sell. Can KharabCar.com buy it?',
        text: 'Yes, absolutely. We buy cars that are some of the most expensive vehicles out there; and KharabCar.com pays a seller more and always beats other car buyers on the Internet. We even buy them if they’re damaged or not running and still beat the competition. Bottom line; we buy any car and the seller always gets the best price from us, you may sell any car to us..'
        },
        {
        title: 'What happens if my vehicle fails your inspection; will you still buy it from me?',
        text: 'Sell My Car with Failed RTA / Tasjeel / Adnoc Inspection Yes, absolutely. In some cases, we may need to adjust the purchase price we can offer to compensate for mechanical items discovered during the inspection. But that’s ok; we will buy any car in any condition, anywhere in the UAE'
        },
        {
        title: 'Can I sell my car if it’s been crashed?',
        text: 'Sell My Crashed-Wrecked Car – Truck – Van Don’t forget the meanings of Kharab Car is bad or ruined car, so by all means you can sell your damaged or wrecked car to us; and if it doesn’t run, it doesn’t matter. We’ll still buy it. Vehicles get damaged maybe because someone was negligent, or maybe Mother Nature decided to drop a tree across the roof or maybe a camel ran out in front of you; there are tons of reasons vehicles “get out of shape”. KharabCar.com understands accidents happen and we’re ready to offer a purchase price that will beat most of other companies on the Internet.'
        },
        {
        title: 'Will you buy my car directly or send me to a dealer?',
        text: 'We buy your car for cash directly. We do not send our customers to a dealer or a 3rd party source.'
        },
        {
        title: 'My car has been towed Municipality and I have no money to get it back. Can I sell it?',
        text: 'If your vehicle has been towed and you can’t afford to pay the charges and storage fees, we can pay the charges and can get your vehicle released. Once it’s free and clear, we then tow your vehicle to one of our free storage facilities and buy your car.'
        },
        {
        title: 'My car was towed and impounded; can I still sell it?',
        text: 'Sell My Impounded Car, Truck, Vehicle Yes, you can still sell your car to KharabCar.com. In fact, we will buy your impounded vehicle and even pay the storage charges to get it released. If it is being held by the police, once it is free and clear with a release order, we will buy it and pay the storage fees. Basically, if it’s ok with the police, you can sell your car to us!'
        },
        {
        title: 'Are you trying to sell me another vehicle or using my vehicle as a trade-in value?',
        text: 'NO, we are buying YOUR car outright and paying you cash for it! Just tell us where to send the money – via bank check, bank wire, or cash in hand. We only buy cars, trucks, and vans and pay you the highest price you’ll get anywhere else. However some motorcycle models are welcome to be sold to us'
        },
        {
        title: 'Do I need to give my car a good cleaning first?',
        text: 'No, we’ll buy your car even if it isn’t the tidiest.'
        },
        {
        title: 'Sell My Car Without a Title – Lost or Destroyed?',
        text: 'I can’t find the registration card/ Malkia of my car. Can I still sell it to kharabcar.com? If you’ve lost the registration card, or it’s been destroyed, we can help you get a replacement and buy your car all in the same day. '
        },
       
        {
        title: 'Why should I sell my car to KharabCar.com?',
        text: 'Because we do all the work so you don’t have to! We will pay you more for your car than any other offer and there’s no hassle with us. We save you time and it doesn’t matter if you have a car, truck or van to sell in UAE If you have a car to sell, traditionally you’ve had two choices:  . Selling your vehicle to a dealer – this can be convenient but it generally leads to you getting a lower price.      . Selling it yourself – this can lead to you getting a higher price than trading it in at a dealership, but running ads, on classified sites for instance, phone calls, emails and setting up meetings with potential buyers can be a big hassle 1. It’s time-consuming – wasted hours answering emails and phone calls.   . You’re dealing with strangers, which we all know meeting strangers at your home or any location isn’t always the safest experience.   . You’re also at the mercy of their schedule and what’s convenient for them; not to mention you run the risk of no-shows after all the planning.    . Add a higher level of difficulty and inconvenience if your car is still financed. KharabCar.com breaks the “traditional chains” and you get the best of both worlds! You can even stay at home; sit on your couch watching your favorite shows while we do all the work!   . Thousands more than a trade-in value.   . Hassle free 3. Safe and secure        . Everything we do is concierge to youand we make it convenient for your schedule. We will come to your home, work or a location you feel safe in.'
        },
       
        {
        title: 'I am okay with the price; but how much of a hassle is it to go through the process to sell my car to you?',
        text: 'The Process to Sell My Vehicle – Car, Truck, Van Agreeing on and meeting price expectations is the toughest part. Once we reach a fair number that makes us both happy, the process is simple, fast, and safe. Have a look at the steps below, and you’ll see we make selling your car quick and easy!Fair price for your car is accepted.For your protection and liability, an Agreement is signed by you and us.An inspection is scheduledIf we are picking it up we schedule a time convenient for you to perform a simple inspection.If you are dropping it off at one of our locations, your car is inspected while you wait.About payments, it’s by your preference. You tell us how you want to receive your money – bank check, ATM deposit or cash.Turning the signed title over to us – You Get Paid First! Once the seller receives payment from us, the title is signed and turned over.'
        },
       
]
export default FixersData;