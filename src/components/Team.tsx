import { Linkedin, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Person 1',
    role: 'Founder & Creative Director',
    bio: 'Passionate about design and storytelling through visual art. 10+ years in graphic design and branding.',
    imageUrl: 'https://images.pexels.com/photos/2072183/pexels-photo-2072183.jpeg?auto=compress&cs=tinysrgb&w=600',
    linkedin: '#',
    email: 'person1@walloffame.com'
  },
  {
    name: 'Person 2',
    role: 'Lead Designer',
    bio: 'Creating bold, inspiring designs that transform spaces. Specializes in contemporary and minimalist aesthetics.',
    imageUrl: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=600',
    linkedin: '#',
    email: 'person2@walloffame.com'
  },
  {
    name: 'Person 3',
    role: 'Product Manager',
    bio: 'Bringing creative visions to life with quality and precision. Ensures every poster meets our high standards.',
    imageUrl: 'https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?auto=compress&cs=tinysrgb&w=600',
    linkedin: '#',
    email: 'person3@walloffame.com'
  },
  {
    name: 'Person 4',
    role: 'Marketing Lead',
    bio: 'Building connections between art and audience. Passionate about sharing stories that matter.',
    imageUrl: 'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=600',
    linkedin: '#',
    email: 'person4@walloffame.com'
  },
  {
    name: 'Person 5',
    role: 'Operations Manager',
    bio: 'Ensuring smooth operations and delivering excellence in every aspect of our business.',
    imageUrl: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=600',
    linkedin: '#',
    email: 'person5@walloffame.com'
  }
];

export default function Team() {
  return (
    <div className="py-24 bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            We are Wall of Fame – a team passionate about design and storytelling through posters that inspire and transform spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-neutral-50 dark:bg-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700"
            >
              <div className="aspect-square overflow-hidden bg-neutral-200">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex items-center space-x-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="p-2 bg-white dark:bg-neutral-700 dark:text-white rounded-full border border-neutral-200 dark:border-neutral-600 hover:border-neutral-900 dark:hover:border-amber-600 hover:bg-neutral-900 dark:hover:bg-amber-600 hover:text-white transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-white dark:bg-neutral-700 dark:text-white rounded-full border border-neutral-200 dark:border-neutral-600 hover:border-neutral-900 dark:hover:border-amber-600 hover:bg-neutral-900 dark:hover:bg-amber-600 hover:text-white transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
