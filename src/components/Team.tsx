interface TeamMember {
  name: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Shreyansh Soni'
  },
  {
    name: 'Nafees Ansari'
  },
  {
    name: 'Mohit Kolhe'
  },
  {
    name: 'Ritesh Ware'
  },
  {
    name: 'Dhawal Kothari'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-neutral-200 dark:border-neutral-700 hover:border-amber-500 dark:hover:border-amber-400"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent dark:from-amber-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center min-h-[120px]">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 dark:from-amber-500 dark:to-amber-700 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white text-center group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">
                  {member.name}
                </h3>
                
                <div className="mt-2 w-8 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
