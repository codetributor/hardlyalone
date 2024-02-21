import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

type Email = {
    email: string
}

export async function POST(request: Request) {

    const headersList = headers();
    const referer = headersList.get("sec-fetch-site");

    const body: Email = await request.json()
    
    if(body && referer && referer == "same-origin") {
        const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
        const API_KEY = process.env.MAILCHIMP_API_KEY;
        const DATACENTER = process.env.MAILCHIMP_SERVER;

        const data = {
            email_address: body.email,
            status: "subscribed"
        }
        const res = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                Authorization: `apikey ${API_KEY}`,
                "Content-Type": "application/json"
            }
        })
       
        if(res.status == 200) {
            return new Response(JSON.stringify({status: 200}))
        }
        
        if(res.status >= 400) {
            return new Response(JSON.stringify({
                status: 400,
                error: "there was an error subscribing to the newsletter, please enter a valid email, or you are already subscribed"
            }))
        }
    } else {
        return NextResponse.json({message: "not allowed"}, {status: 400})
    }
}