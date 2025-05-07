import React from 'react';
import { Mail, Globe, Linkedin, Award, ChevronRight } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'TS. Nguyễn Văn A',
      role: 'Giám đốc điều hành & Biên tập viên chính',
      specialty: 'Nội khoa',
      bio: 'TS. Nguyễn Văn A tốt nghiệp Đại học Y Hà Nội và có 15 năm kinh nghiệm trong lĩnh vực nội khoa. Ông đã dịch hơn 10 cuốn sách y khoa quan trọng và là tác giả của nhiều bài báo khoa học được công nhận quốc tế.',
      image: '/api/placeholder/300/300',
      email: 'nguyenvana@medtrans.vn',
      website: 'https://nguyenvana.com',
      linkedin: 'https://linkedin.com/in/nguyenvana',
      achievements: ['Giải thưởng biên dịch xuất sắc 2023', 'Chứng nhận dịch thuật y khoa quốc tế']
    },
    {
      id: 2,
      name: 'PGS.TS. Trần Thị B',
      role: 'Giám đốc Y khoa',
      specialty: 'Ngoại khoa',
      bio: 'PGS.TS. Trần Thị B chuyên về ngoại khoa tim mạch và đã có hơn 20 năm kinh nghiệm giảng dạy tại Đại học Y Dược TP.HCM. Bà đã tham gia nhiều dự án hợp tác quốc tế và là thành viên của Hiệp hội Phẫu thuật Tim mạch Châu Á.',
      image: '/api/placeholder/300/300',
      email: 'tranthib@medtrans.vn',
      website: 'https://tranthib.com',
      linkedin: 'https://linkedin.com/in/tranthib',
      achievements: ['Giải thưởng nghiên cứu y khoa 2022', 'Phẫu thuật viên xuất sắc 2020']
    },
    {
      id: 3,
      name: 'ThS. Lê Văn C',
      role: 'Trưởng nhóm Ngôn ngữ học',
      specialty: 'Ngôn ngữ và Biên dịch Y khoa',
      bio: 'ThS. Lê Văn C tốt nghiệp ngôn ngữ Anh và có chứng chỉ biên dịch chuyên ngành y tế. Anh đã tham gia biên dịch hơn 20 cuốn sách y khoa và phụ trách việc đảm bảo tính nhất quán của thuật ngữ trong các bản dịch.',
      image: '/api/placeholder/300/300',
      email: 'levanc@medtrans.vn',
      website: 'https://levanc.com',
      linkedin: 'https://linkedin.com/in/levanc',
      achievements: ['Biên dịch viên xuất sắc 2024', 'Chứng chỉ dịch thuật y khoa ATA']
    },
    {
      id: 4,
      name: 'BS.CKI. Phạm Thị D',
      role: 'Biên tập viên chuyên ngành Sản phụ khoa',
      specialty: 'Sản phụ khoa',
      bio: 'BS.CKI. Phạm Thị D là bác sĩ chuyên khoa I Sản phụ khoa với 10 năm kinh nghiệm lâm sàng. Chị đặc biệt quan tâm đến việc đưa kiến thức y khoa hiện đại tiếp cận rộng rãi đến các bác sĩ trẻ thông qua các tài liệu chuyên ngành chất lượng cao.',
      image: '/api/placeholder/300/300',
      email: 'phamthid@medtrans.vn',
      website: '',
      linkedin: 'https://linkedin.com/in/phamthid',
      achievements: ['Giải thưởng nghiên cứu sản khoa 2023']
    },
    {
      id: 5,
      name: 'TS.BS. Hoàng Văn E',
      role: 'Biên tập viên chuyên ngành Nhi khoa',
      specialty: 'Nhi khoa',
      bio: 'TS.BS. Hoàng Văn E tốt nghiệp Tiến sĩ Y khoa chuyên ngành Nhi và có hơn 12 năm kinh nghiệm điều trị. Ông đã công bố nhiều nghiên cứu về bệnh lý nhi khoa và tham gia biên soạn nhiều tài liệu giảng dạy tại các trường đại học y.',
      image: '/api/placeholder/300/300',
      email: 'hoangvane@medtrans.vn',
      website: 'https://hoangvane.com',
      linkedin: 'https://linkedin.com/in/hoangvane',
      achievements: ['Bác sĩ Nhi xuất sắc 2021', 'Giải thưởng nghiên cứu lâm sàng 2022']
    },
    {
      id: 6,
      name: 'ThS.BS. Vũ Thị F',
      role: 'Biên tập viên chuyên ngành Y học cơ sở',
      specialty: 'Giải phẫu học',
      bio: 'ThS.BS. Vũ Thị F tốt nghiệp Thạc sĩ Y học chuyên ngành Giải phẫu học và hiện đang giảng dạy tại Đại học Y Hà Nội. Chị đã tham gia biên dịch nhiều sách giáo khoa giải phẫu và sinh lý học được sử dụng rộng rãi trong các trường đại học y.',
      image: '/api/placeholder/300/300',
      email: 'vuthif@medtrans.vn',
      website: '',
      linkedin: 'https://linkedin.com/in/vuthif',
      achievements: ['Giảng viên xuất sắc 2023', 'Biên dịch viên y khoa tiêu biểu 2022']
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="hero-gradient py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Đội ngũ MedTrans</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl">
            Chúng tôi là những chuyên gia y khoa và ngôn ngữ học, đồng hành cùng nhau để mang đến những tài liệu y khoa chất lượng cao bằng tiếng Việt.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Team Introduction */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in-up">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="badge mb-4">Chuyên môn và nhiệt huyết</div>
                  <h2 className="text-2xl font-bold mb-4 heading-gradient">Sự kết hợp hoàn hảo</h2>
                  <p className="text-gray-600 mb-6">
                    Đội ngũ MedTrans bao gồm các bác sĩ, giảng viên, biên dịch viên và chuyên gia ngôn ngữ học với kinh nghiệm chuyên môn cao. Chúng tôi làm việc theo quy trình biên dịch nghiêm ngặt, đảm bảo tính chính xác của thuật ngữ y khoa và sự trôi chảy của ngôn ngữ.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Mỗi cuốn sách đều được biên dịch bởi một nhóm gồm các chuyên gia y khoa và biên dịch viên, sau đó được hiệu đính bởi các chuyên gia hàng đầu trong lĩnh vực.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/api/placeholder/800/600" 
                    alt="Đội ngũ làm việc" 
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Team Members Grid */}
          <h2 className="text-3xl font-bold mb-10 heading-gradient text-center">Gặp gỡ các thành viên</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in-up">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover object-center"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 to-transparent p-4">
                    <div className="book-specialty">{member.specialty}</div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-blue-200 text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h4 className="font-semibold mb-2 text-blue-700">Liên hệ:</h4>
                    <div className="flex flex-col space-y-2">
                      <a href={`mailto:${member.email}`} className="flex items-center text-gray-600 hover:text-blue-700 transition-colors">
                        <Mail className="h-4 w-4 mr-2" />
                        <span>{member.email}</span>
                      </a>
                      {member.website && (
                        <a href={member.website} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-700 transition-colors">
                          <Globe className="h-4 w-4 mr-2" />
                          <span>Website cá nhân</span>
                        </a>
                      )}
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-blue-700 transition-colors">
                        <Linkedin className="h-4 w-4 mr-2" />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                  {member.achievements.length > 0 && (
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <h4 className="font-semibold mb-2 text-blue-700">Thành tựu nổi bật:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {member.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <Award className="h-4 w-4 mr-2 mt-1 text-blue-600" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Join Our Team Section */}
          <div className="mt-16">
            <div className="bg-blue-50 rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="badge mb-4">Cơ hội</div>
                  <h2 className="text-2xl font-bold mb-4 heading-gradient">Tham gia cùng chúng tôi</h2>
                  <p className="text-gray-600 mb-6">
                    Chúng tôi luôn tìm kiếm những cá nhân tài năng và đam mê trong lĩnh vực y khoa và biên dịch để cùng đóng góp vào sứ mệnh của MedTrans. Nếu bạn quan tâm đến việc dịch thuật y khoa và muốn đóng góp vào sự phát triển của nền y học Việt Nam, hãy liên hệ với chúng tôi.
                  </p>
                  <a href="/lien-he" className="btn-primary inline-flex items-center self-start">
                    Liên hệ ngay
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
                <div className="md:w-1/2">
                  <img 
                    src="/api/placeholder/800/600" 
                    alt="Tham gia đội ngũ" 
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TeamPage;