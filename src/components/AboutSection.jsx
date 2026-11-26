import { Code, Layers, Gamepad2, GraduationCap, Mail } from "lucide-react";
import { projectsData, TechnicalSkills } from "../assets/assets";

export default function AboutSection() {
  const stats = [
    { icon: Code, label: "Personal Projects", value: projectsData.length },
    { icon: Layers, label: "Technologies Learned", value: TechnicalSkills.length },
    { icon: Gamepad2, label: "Games Built", value: "2" },
    { icon: GraduationCap, label: "MBA Postgraduate", value: "2022" },
  ];

  return (
    <section id="about" style={{ color: 'var(--color-HeadColor)', backgroundColor: 'var(--color-BgColor)' }}
       className="relative isolate py-20 bg-BgColor text-TextColor ">

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9d5bff] rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#9d5bff] rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#ffef0a] rounded-full filter blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="head-HeadColor text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-TextColor max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through clean code and innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center" >
          <div className="space-y-6">
            <div className="space-y-4">
                <h3 className="head-HeadColor text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-emerald-800 to-green-900 duration-300 hover:scale-105 hover:-translate-y-2 text-2xl font-bold">
                My Story
                </h3>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p className="text-TextColor">
                  I am a fresher frontend developer who enjoys building responsive web applications
                  using modern technologies like React.js, Redux, JavaScript, and Tailwind CSS.
                </p>
                <p className="text-TextColor">
                  My journey began with a passion for creating intuitive user experiences. I practise
                  by building personal projects, from a music player and a video platform to a task
                  board, search tools, and games.
                </p>
                <p className="text-TextColor">
                  I believe in writing clean, maintainable code and staying current with the latest 
                  industry trends and best practices. My goal is to start my career in a team where I
                  can learn, grow, and contribute to meaningful projects.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="head-HeadColor font-semibold mb-2">Education</h4>
                <p className="text-TextColor font-bold text-sm">MBA (Travel and Tourism Administration Management)</p>
                <p className="text-TextColor text-sm">Vikrama Simhapuri University, Kakaturu, Nellore.</p>
                <p className="text-TextColor text-sm">2020 - 2022</p>
                <p className="text-TextColor text-sm mb-4"><strong>Percentage: </strong>72%</p>
                <p className="text-TextColor font-bold text-sm">B.Com (Computer Applications)</p>
                <p className="text-TextColor text-sm"></p>
                <p className="text-TextColor text-sm">Sri Venkateswara University, Tirupati.</p>
                <p className="text-TextColor text-sm">2017 - 2020</p>
                <p className="text-TextColor text-sm"><strong>Percentage: </strong>74.5%</p>
              </div>    
              <div>
                <h4 className="head-HeadColor font-semibold mb-2">Current Location</h4>
                <p className="text-TextColor text-sm font-semibold">Chittoor, Andhra Pradesh, India</p>
                <p className="text-TextColor text-sm">Available for remote, onsite, Hybrid work</p>
              </div>
              <div>
                <h4 className="head-HeadColor font-semibold mb-2">Preferred Location</h4>
                <p className="text-TextColor text-sm font-semibold">Chennai, Tamilnadu,</p>
                <p className="text-TextColor text-sm font-semibold">Bengaluru, Karnataka,</p>
                <p className="text-TextColor text-sm font-semibold">Hyderabad, Telangana.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="hover:animate-wave relative group rounded-xl p-[2px] transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
                {/* Inner container */}
                <div className="rounded-xl shadow-xl shadow-zinc-900 hover:card-BgColor border-2 border-CardBorderColor text-TextColor p-6 text-center transition-colors duration-300">
                    <stat.icon className="mx-auto mb-4 text-TextColor group-hover:animate-pulse" size={32} />
                    <div className="text-2xl font-bold text-TextColor mb-2">{stat.value}</div>
                    <div className="text-TextColor text-sm">{stat.label}</div>
                </div>
                </div>
            ))}
          </div>
        </div>
          
          <div className="mt-10 p-6 card-BgColor rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-lg font-medium">Like what you see?</div>
            <div className="text-sm text-3">I’m looking for entry-level frontend roles (React/Node.js) — let’s talk.</div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:dileepmylapuri6@gmail.com"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center gap-2"
            >
              <Mail size={14} />
              Email me
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}