export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const PUB_ID = 'pub_4ca40bea-12b3-4e26-af57-3a0c132cf2d1';
  const API_KEY = 'YxecDNQmZTV8M9zVhLZiZx3XW0TOHBetdH4535ROINketYuXPvOD0UclNn7PLpx3';

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${PUB_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify(req.body)
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Subscription failed' });
  }
}
