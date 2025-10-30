import Contact from '../models/Contact.js';

export const saveMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ message: 'All fields required' });

    const saved = await Contact.create({ name, email, message });
    res.json({ message: 'Message saved successfully!', contact: saved });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
