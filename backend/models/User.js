import mongoose from 'mongoose';

// Function to generate a simple tagline
const generateTagline = (name) => {
    const taglines = [
        `Ready to master the web, ${name}!`,
        `Your learning journey starts now, ${name}.`,
        `Future tech leader in the making!`,
        `Dedicated to brilliance.`,
        `Innovate. Educate. Elevate.`,
    ];
    return taglines[Math.floor(Math.random() * taglines.length)];
};

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    tagline: { type: String }, // Auto-generated field
    enrolledCourses: [{ type: Number }], // Simple list of course IDs
    createdAt: { type: Date, default: Date.now },
});

userSchema.pre('save', function(next) {
    if (this.isNew && !this.tagline) {
        const firstName = this.name.split(' ')[0];
        this.tagline = generateTagline(firstName);
    }
    next();
});

export default mongoose.model('User', userSchema);