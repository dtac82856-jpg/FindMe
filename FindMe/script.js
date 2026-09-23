const questions = [
    {
        question: "ถ้าได้ทำโปรเจกต์หนึ่งชิ้น คุณอยากทำอะไรที่สุด?",
        choices: [
            ["สร้างเว็บไซต์หรือแอป", ["cs", "it", "software"]],
            ["สร้างอุปกรณ์หรือเครื่องจักร", ["computer_engineering", "engineering"]],
            ["วิเคราะห์ข้อมูลเพื่อหาคำตอบ", ["data", "economics"]],
            ["ออกแบบหน้าตาและประสบการณ์ของผู้ใช้", ["design", "digital_media"]]
        ]
    },

    {
        question: "งานแบบไหนที่คุณสามารถทำได้นานโดยไม่รู้สึกเบื่อ?",
        choices: [
            ["นั่งแก้ปัญหาบนคอมพิวเตอร์", ["cs", "it", "software"]],
            ["คิดและออกแบบสิ่งใหม่ ๆ", ["design", "architecture", "digital_media"]],
            ["อ่านข้อมูลแล้ววิเคราะห์", ["data", "economics", "science"]],
            ["พูดคุย ทำงาน หรือช่วยเหลือคนอื่น", ["psychology", "communication", "education"]]
        ]
    },

    {
        question: "ถ้าเจอปัญหาที่ไม่รู้วิธีแก้ คุณมักจะทำอย่างไร?",
        choices: [
            ["ค้นข้อมูลและลองแก้ด้วยตัวเอง", ["cs", "it", "data"]],
            ["ทดลองหลายวิธีจนกว่าจะเจอวิธีที่ใช้ได้", ["engineering", "science"]],
            ["ถามคนอื่นและพยายามเข้าใจมุมมองของเขา", ["psychology", "social", "communication"]],
            ["คิดวิธีใหม่ที่แตกต่างจากเดิม", ["design", "digital_media", "business"]]
        ]
    },

    {
        question: "วิชาไหนที่คุณรู้สึกว่าน่าสนใจ?",
        choices: [
            ["คอมพิวเตอร์ / เทคโนโลยี", ["cs", "it", "software"]],
            ["คณิตศาสตร์ / การคำนวณ", ["data", "economics", "engineering"]],
            ["ศิลปะ / การออกแบบ", ["design", "architecture", "digital_media"]],
            ["ภาษา / การสื่อสาร", ["communication", "humanities", "international"]]
        ]
    },

    {
        question: "ถ้ามีข้อมูลจำนวนมาก คุณอยากทำอะไรกับมัน?",
        choices: [
            ["สร้างระบบเพื่อจัดการข้อมูล", ["it", "cs", "data"]],
            ["วิเคราะห์และหาความสัมพันธ์", ["data", "economics", "science"]],
            ["นำข้อมูลไปวางแผนธุรกิจ", ["business", "marketing", "economics"]],
            ["นำข้อมูลไปศึกษาพฤติกรรมผู้คน", ["psychology", "social"]]
        ]
    },

    {
        question: "คุณอยากสร้างผลงานแบบไหน?",
        choices: [
            ["เว็บไซต์ แอป หรือโปรแกรม", ["cs", "it", "software"]],
            ["โปสเตอร์ ภาพกราฟิก หรือสื่อดิจิทัล", ["design", "digital_media", "communication"]],
            ["สิ่งประดิษฐ์หรือระบบอัตโนมัติ", ["engineering", "computer_engineering"]],
            ["โครงการที่ช่วยแก้ปัญหาให้ผู้คน", ["social", "psychology", "public_health"]]
        ]
    },

    {
        question: "ถ้าต้องทำงานกลุ่ม คุณอยากรับหน้าที่อะไร?",
        choices: [
            ["ดูแลระบบหรือส่วนเทคนิค", ["cs", "it", "computer_engineering"]],
            ["ออกแบบผลงานและหน้าตาโปรเจกต์", ["design", "digital_media"]],
            ["วางแผนและจัดการงานทั้งหมด", ["business", "management"]],
            ["นำเสนอและสื่อสารกับคนอื่น", ["communication", "education"]]
        ]
    },

    {
        question: "เรื่องไหนที่คุณมักสงสัยและอยากรู้คำตอบ?",
        choices: [
            ["เทคโนโลยีทำงานอย่างไร", ["cs", "it", "engineering"]],
            ["ธรรมชาติและสิ่งมีชีวิตทำงานอย่างไร", ["biology", "science", "environment"]],
            ["ทำไมคนถึงคิดหรือทำพฤติกรรมแบบนั้น", ["psychology", "social"]],
            ["ทำไมเศรษฐกิจหรือธุรกิจถึงเป็นแบบนี้", ["economics", "business"]]
        ]
    },

    {
        question: "ถ้าให้สร้างธุรกิจของตัวเอง คุณอยากทำอะไร?",
        choices: [
            ["สร้างแอปหรือแพลตฟอร์ม", ["cs", "it", "business"]],
            ["สร้างแบรนด์หรือสินค้า", ["marketing", "business", "design"]],
            ["ทำธุรกิจที่ใช้ข้อมูลช่วยตัดสินใจ", ["data", "economics", "business"]],
            ["สร้างธุรกิจที่แก้ปัญหาสังคม", ["social", "business"]]
        ]
    },

    {
        question: "คุณสนใจการออกแบบพื้นที่หรือสิ่งปลูกสร้างมากแค่ไหน?",
        choices: [
            ["สนใจมาก ชอบคิดเรื่องอาคารและพื้นที่", ["architecture"]],
            ["สนใจการออกแบบภายใน", ["architecture", "design"]],
            ["สนใจเทคโนโลยีที่ใช้กับอาคาร", ["engineering", "computer_engineering"]],
            ["ไม่ค่อยสนใจเรื่องนี้", []]
        ]
    },

    {
        question: "ถ้าได้ทำงานกับคน คุณสนใจเรื่องใดมากที่สุด?",
        choices: [
            ["เข้าใจความคิดและความรู้สึกของคน", ["psychology"]],
            ["สื่อสารและสร้างความเข้าใจ", ["communication", "humanities"]],
            ["สอนหรือถ่ายทอดความรู้", ["education"]],
            ["ศึกษาปัญหาของสังคม", ["social", "political_science"]]
        ]
    },

    {
        question: "คุณสนใจข่าวและเหตุการณ์บ้านเมืองในลักษณะไหน?",
        choices: [
            ["อยากรู้ว่ารัฐบาลและนโยบายทำงานอย่างไร", ["political_science"]],
            ["สนใจผลกระทบต่อเศรษฐกิจ", ["economics"]],
            ["สนใจมุมมองและพฤติกรรมของผู้คน", ["social"]],
            ["สนใจการนำเสนอข่าวและสื่อ", ["communication"]]
        ]
    },

    {
        question: "คุณชอบการทดลองเพื่อค้นหาคำตอบหรือไม่?",
        choices: [
            ["ชอบทดลองทางวิทยาศาสตร์", ["science", "chemistry", "physics"]],
            ["ชอบทดลองเกี่ยวกับสิ่งมีชีวิต", ["biology", "health"]],
            ["ชอบทดลองสร้างสิ่งประดิษฐ์", ["engineering"]],
            ["ชอบทดลองกับโปรแกรมหรือเทคโนโลยี", ["cs", "software"]]
        ]
    },

    {
        question: "ถ้าต้องเลือกปัญหาหนึ่งเรื่องมาแก้ คุณอยากแก้เรื่องไหน?",
        choices: [
            ["ระบบเทคโนโลยีที่ใช้งานยาก", ["it", "cs", "design"]],
            ["ปัญหาสิ่งแวดล้อม", ["environment", "science", "agriculture"]],
            ["ปัญหาสุขภาพของผู้คน", ["health", "public_health", "biology"]],
            ["ปัญหาสังคม", ["social", "political_science", "psychology"]]
        ]
    },

    {
        question: "คุณชอบทำงานกับตัวเลขในลักษณะใด?",
        choices: [
            ["คำนวณและสร้างแบบจำลอง", ["data", "mathematics"]],
            ["วิเคราะห์ธุรกิจและเศรษฐกิจ", ["economics", "business"]],
            ["ใช้ตัวเลขกับงานวิทยาศาสตร์", ["science", "physics"]],
            ["ไม่ค่อยชอบงานตัวเลข", []]
        ]
    },

    {
        question: "ถ้าต้องทำสื่อหนึ่งชิ้น คุณอยากทำอะไร?",
        choices: [
            ["วิดีโอหรือคอนเทนต์", ["communication", "digital_media"]],
            ["กราฟิกหรือภาพประกอบ", ["design", "digital_media"]],
            ["เว็บไซต์หรือสื่ออินเทอร์แอคทีฟ", ["it", "design", "digital_media"]],
            ["บทความหรือเนื้อหาเชิงภาษา", ["humanities", "communication"]]
        ]
    },

    {
        question: "คุณสนใจการทำงานเกี่ยวกับภาษาอย่างไร?",
        choices: [
            ["เรียนรู้ภาษาใหม่ ๆ", ["humanities", "international"]],
            ["เขียนและเรียบเรียงเนื้อหา", ["humanities", "communication"]],
            ["ใช้ภาษาเพื่อสื่อสารกับคนต่างประเทศ", ["international"]],
            ["ไม่ค่อยสนใจด้านภาษา", []]
        ]
    },

    {
        question: "ถ้าได้เรียนรู้เรื่องการเงิน คุณสนใจเรื่องใด?",
        choices: [
            ["การลงทุนและเศรษฐกิจ", ["economics", "finance"]],
            ["การบริหารธุรกิจ", ["business", "management"]],
            ["การวิเคราะห์ข้อมูลทางการเงิน", ["data", "economics"]],
            ["การทำการตลาดและขายสินค้า", ["marketing", "business"]]
        ]
    },

    {
        question: "คุณอยากทำงานที่สร้างผลกระทบแบบไหน?",
        choices: [
            ["สร้างเทคโนโลยีใหม่ ๆ", ["cs", "it", "engineering"]],
            ["สร้างผลงานที่ทำให้คนรู้สึกหรือเข้าใจบางอย่าง", ["design", "communication", "digital_media"]],
            ["ช่วยเหลือหรือพัฒนาคุณภาพชีวิตคน", ["health", "psychology", "social"]],
            ["แก้ปัญหาเศรษฐกิจหรือธุรกิจ", ["economics", "business"]]
        ]
    },

    {
        question: "ถ้าเลือกภาพอนาคตของตัวเอง คุณอยากเห็นตัวเองทำอะไร?",
        choices: [
            ["สร้างโปรแกรม เทคโนโลยี หรือระบบใหม่", ["cs", "it", "software"]],
            ["ออกแบบ สร้างสรรค์ หรือสร้างสื่อ", ["design", "digital_media", "communication"]],
            ["วิเคราะห์ วิจัย และค้นพบสิ่งใหม่", ["data", "science", "research"]],
            ["บริหารองค์กรหรือสร้างธุรกิจ", ["business", "management", "marketing"]]
        ]
    }
];


// รายชื่อคณะที่ระบบสามารถแนะนำ
const faculties = {

    cs: "วิทยาการคอมพิวเตอร์",
    it: "เทคโนโลยีสารสนเทศ",
    software: "วิศวกรรมซอฟต์แวร์",
    computer_engineering: "วิศวกรรมคอมพิวเตอร์",
    engineering: "วิศวกรรมศาสตร์",
    data: "วิทยาการข้อมูล",
    mathematics: "คณิตศาสตร์ / คณิตศาสตร์ประยุกต์",
    economics: "เศรษฐศาสตร์",
    finance: "การเงิน",
    business: "บริหารธุรกิจ",
    management: "การจัดการ",
    marketing: "การตลาด",
    design: "การออกแบบ",
    digital_media: "ดิจิทัลมีเดีย",
    architecture: "สถาปัตยกรรมศาสตร์",
    communication: "นิเทศศาสตร์",
    psychology: "จิตวิทยา",
    social: "สังคมศาสตร์",
    political_science: "รัฐศาสตร์",
    humanities: "มนุษยศาสตร์ / อักษรศาสตร์",
    international: "ความสัมพันธ์ระหว่างประเทศ / ภาษา",
    education: "ครุศาสตร์ / ศึกษาศาสตร์",
    science: "วิทยาศาสตร์",
    biology: "ชีววิทยา",
    chemistry: "เคมี",
    physics: "ฟิสิกส์",
    environment: "วิทยาศาสตร์สิ่งแวดล้อม",
    agriculture: "เกษตรศาสตร์",
    health: "วิทยาศาสตร์สุขภาพ",
    public_health: "สาธารณสุขศาสตร์",
    research: "วิจัยและพัฒนา"
};


let scores = {};
let currentQuestion = 0;


function resetScores() {

    scores = {};

    Object.keys(faculties).forEach(key => {
        scores[key] = 0;
    });
}


function startTest() {

    resetScores();

    currentQuestion = 0;

    showQuestion();
}


function showQuestion() {

    const hero = document.querySelector(".hero");

    const q = questions[currentQuestion];

    hero.innerHTML = `
        <div class="quiz">

            <p class="small-title">
                FIND YOUR FACULTY
            </p>

            <p class="question-number">
                คำถาม ${currentQuestion + 1} / ${questions.length}
            </p>

            <div class="progress">
                <div class="progress-bar"
                    style="width:${((currentQuestion + 1) / questions.length) * 100}%">
                </div>
            </div>

            <h1>${q.question}</h1>

            <div class="choices">

                ${q.choices.map((choice, index) => `
                    <button
                        class="choice"
                        onclick="answer(${index})">

                        <span>${String.fromCharCode(65 + index)}</span>

                        ${choice[0]}

                    </button>
                `).join("")}

            </div>

        </div>
    `;
}


function answer(index) {

    const selected = questions[currentQuestion].choices[index];

    const facultyList = selected[1];

    // เพิ่มคะแนนให้ทุกคณะที่เกี่ยวข้อง
    facultyList.forEach(faculty => {

        if (scores[faculty] !== undefined) {
            scores[faculty]++;
        }

    });

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }
}


function showResult() {

    const hero = document.querySelector(".hero");

    const ranked = Object.entries(scores)
        .filter(item => item[1] > 0)
        .sort((a, b) => b[1] - a[1]);


    const topResults = ranked.slice(0, 5);


    hero.innerHTML = `

        <div class="result">

            <p class="small-title">
                YOUR PATH
            </p>

            <h1>
                คณะที่มีแนวโน้ม<br>
                <span>สอดคล้องกับคุณ</span>
            </h1>

            <p class="description">
                จากคำตอบทั้งหมดของคุณ
                เราพบแนวทางการเรียนที่มีลักษณะสอดคล้องกับ
                ความสนใจและรูปแบบการคิดของคุณ
            </p>

            <div class="faculty-results">

                ${topResults.map((item, index) => `

                    <div class="faculty-card">

                        <div class="rank">
                            ${index + 1}
                        </div>

                        <div>

                            <h2>
                                ${faculties[item[0]]}
                            </h2>

                            <p>
                                แนวทางการเรียนที่มีลักษณะสอดคล้อง
                                กับคำตอบของคุณ
                            </p>

                        </div>

                        <button class="arrow" onclick="showFaculty('${item[0]}')">
    →
</button>

                    </div>

                `).join("")}

            </div>

            <button onclick="startTest()">
                ทำแบบประเมินอีกครั้ง
            </button>

        </div>
    `;
}
const facultyInfo = {

    cs: {
        name: "วิทยาการคอมพิวเตอร์",
        description: "ศึกษาเกี่ยวกับการคิดเชิงคำนวณ การเขียนโปรแกรม อัลกอริทึม และการพัฒนาซอฟต์แวร์",
        subjects: "การเขียนโปรแกรม, อัลกอริทึม, ฐานข้อมูล, ระบบปฏิบัติการ",
        careers: "นักพัฒนาซอฟต์แวร์, Programmer, Software Developer, นักพัฒนาเว็บ"
    },

    it: {
        name: "เทคโนโลยีสารสนเทศ",
        description: "ศึกษาเกี่ยวกับการนำเทคโนโลยีสารสนเทศมาใช้จัดการข้อมูล ระบบ และแก้ปัญหาในการทำงาน",
        subjects: "ฐานข้อมูล, ระบบสารสนเทศ, Network, Web Technology",
        careers: "IT Support, System Analyst, Web Developer, IT Specialist"
    },

    software: {
        name: "วิศวกรรมซอฟต์แวร์",
        description: "เน้นการออกแบบ พัฒนา ทดสอบ และดูแลซอฟต์แวร์อย่างเป็นระบบ",
        subjects: "Software Design, Programming, Software Testing, Database",
        careers: "Software Engineer, Software Developer, QA Engineer"
    },

    computer_engineering: {
        name: "วิศวกรรมคอมพิวเตอร์",
        description: "ผสมผสานความรู้ด้านคอมพิวเตอร์กับวิศวกรรม ทั้ง Hardware และ Software",
        subjects: "วงจรดิจิทัล, Programming, Computer Architecture, Embedded Systems",
        careers: "Computer Engineer, Embedded Engineer, System Engineer"
    },

    engineering: {
        name: "วิศวกรรมศาสตร์",
        description: "ใช้คณิตศาสตร์ วิทยาศาสตร์ และเทคโนโลยีเพื่อออกแบบและแก้ปัญหา",
        subjects: "คณิตศาสตร์, ฟิสิกส์, การออกแบบทางวิศวกรรม",
        careers: "วิศวกรในหลากหลายสาขา"
    },

    data: {
        name: "วิทยาการข้อมูล",
        description: "ใช้ข้อมูล สถิติ และเทคโนโลยีเพื่อค้นหารูปแบบและช่วยในการตัดสินใจ",
        subjects: "Statistics, Data Analysis, Programming, Machine Learning",
        careers: "Data Analyst, Data Scientist, Data Engineer"
    },

    economics: {
        name: "เศรษฐศาสตร์",
        description: "ศึกษาเกี่ยวกับการจัดสรรทรัพยากร เศรษฐกิจ ตลาด และพฤติกรรมทางเศรษฐกิจ",
        subjects: "เศรษฐศาสตร์จุลภาค, มหภาค, สถิติ, เศรษฐมิติ",
        careers: "นักวิเคราะห์, นักเศรษฐศาสตร์, นักวิเคราะห์ธุรกิจ"
    },

    business: {
        name: "บริหารธุรกิจ",
        description: "ศึกษาเกี่ยวกับการบริหารองค์กร การตลาด การเงิน และการดำเนินธุรกิจ",
        subjects: "การจัดการ, การตลาด, การเงิน, ธุรกิจ",
        careers: "นักธุรกิจ, ผู้จัดการ, Business Analyst"
    },

    marketing: {
        name: "การตลาด",
        description: "ศึกษาเกี่ยวกับผู้บริโภค การสร้างแบรนด์ การสื่อสาร และกลยุทธ์ทางการตลาด",
        subjects: "Marketing, Branding, Consumer Behavior, Digital Marketing",
        careers: "Marketing, Brand Manager, Digital Marketer"
    },

    design: {
        name: "การออกแบบ",
        description: "เน้นการสร้างสรรค์และออกแบบผลงานเพื่อสื่อสารแนวคิดและแก้ปัญหา",
        subjects: "Graphic Design, Typography, Illustration, Design Thinking",
        careers: "Graphic Designer, UX/UI Designer, Art Director"
    },

    digital_media: {
        name: "ดิจิทัลมีเดีย",
        description: "ผสมผสานการออกแบบ เทคโนโลยี และสื่อดิจิทัลเพื่อสร้างผลงาน",
        subjects: "Animation, Graphic, Video, Interactive Media",
        careers: "Digital Artist, Motion Designer, Content Creator"
    },

    architecture: {
        name: "สถาปัตยกรรมศาสตร์",
        description: "ศึกษาเกี่ยวกับการออกแบบอาคาร พื้นที่ และสภาพแวดล้อม",
        subjects: "การออกแบบ, Drawing, Architectural Design, History",
        careers: "สถาปนิก, นักออกแบบพื้นที่"
    },

    communication: {
        name: "นิเทศศาสตร์",
        description: "ศึกษาเกี่ยวกับการสื่อสาร สื่อ และการสร้างเนื้อหาเพื่อสื่อสารกับผู้คน",
        subjects: "การผลิตสื่อ, การโฆษณา, การประชาสัมพันธ์, Content",
        careers: "Content Creator, Producer, PR, Creative"
    },

    psychology: {
        name: "จิตวิทยา",
        description: "ศึกษาความคิด อารมณ์ พฤติกรรม และกระบวนการทางจิตของมนุษย์",
        subjects: "จิตวิทยาพัฒนาการ, บุคลิกภาพ, สังคม, การวิจัย",
        careers: "นักจิตวิทยา, HR, นักวิจัย"
    },

    social: {
        name: "สังคมศาสตร์",
        description: "ศึกษามนุษย์ สังคม ความสัมพันธ์ และปัญหาที่เกิดขึ้นในสังคม",
        subjects: "สังคมวิทยา, การวิจัย, วัฒนธรรม, สังคม",
        careers: "นักวิจัย, นักพัฒนาสังคม, งานองค์กรต่าง ๆ"
    },

    political_science: {
        name: "รัฐศาสตร์",
        description: "ศึกษาเกี่ยวกับการเมือง การปกครอง รัฐ และนโยบายสาธารณะ",
        subjects: "การเมือง, การปกครอง, ความสัมพันธ์ระหว่างประเทศ, นโยบาย",
        careers: "นักวิเคราะห์นโยบาย, นักวิจัย, งานภาครัฐ"
    },

    humanities: {
        name: "มนุษยศาสตร์ / อักษรศาสตร์",
        description: "ศึกษาเกี่ยวกับภาษา วรรณกรรม มนุษย์ และวัฒนธรรม",
        subjects: "ภาษา, วรรณกรรม, วัฒนธรรม, การสื่อสาร",
        careers: "นักเขียน, นักแปล, งานสื่อสาร, งานองค์กร"
    },

    international: {
        name: "ความสัมพันธ์ระหว่างประเทศ / ภาษา",
        description: "ศึกษาเกี่ยวกับภาษา วัฒนธรรม และความสัมพันธ์ระหว่างประเทศ",
        subjects: "ภาษา, International Relations, วัฒนธรรม",
        careers: "งานระหว่างประเทศ, นักแปล, งานองค์กรระหว่างประเทศ"
    },

    education: {
        name: "ครุศาสตร์ / ศึกษาศาสตร์",
        description: "ศึกษาเกี่ยวกับการเรียนรู้ การสอน และการพัฒนาผู้เรียน",
        subjects: "จิตวิทยาการศึกษา, การสอน, การออกแบบการเรียนรู้",
        careers: "ครู, นักการศึกษา, นักพัฒนาการเรียนรู้"
    },

    science: {
        name: "วิทยาศาสตร์",
        description: "ศึกษาธรรมชาติและปรากฏการณ์ต่าง ๆ ผ่านกระบวนการทางวิทยาศาสตร์",
        subjects: "การทดลอง, การวิจัย, วิทยาศาสตร์พื้นฐาน",
        careers: "นักวิทยาศาสตร์, นักวิจัย, ห้องปฏิบัติการ"
    },

    biology: {
        name: "ชีววิทยา",
        description: "ศึกษาเกี่ยวกับสิ่งมีชีวิต ตั้งแต่ระดับเซลล์จนถึงระบบนิเวศ",
        subjects: "Cell Biology, Genetics, Ecology",
        careers: "นักวิจัย, นักวิทยาศาสตร์, งานห้องปฏิบัติการ"
    },

    chemistry: {
        name: "เคมี",
        description: "ศึกษาเกี่ยวกับสาร ปฏิกิริยา และการเปลี่ยนแปลงของสาร",
        subjects: "เคมีอินทรีย์, เคมีวิเคราะห์, ปฏิบัติการ",
        careers: "นักเคมี, นักวิจัย, ห้องปฏิบัติการ"
    },

    physics: {
        name: "ฟิสิกส์",
        description: "ศึกษากฎและปรากฏการณ์ของธรรมชาติผ่านคณิตศาสตร์และการทดลอง",
        subjects: "Mechanics, Electricity, Waves, Physics",
        careers: "นักวิทยาศาสตร์, นักวิจัย, งานเทคนิค"
    },

    environment: {
        name: "วิทยาศาสตร์สิ่งแวดล้อม",
        description: "ศึกษาและแก้ปัญหาที่เกี่ยวข้องกับสิ่งแวดล้อมและทรัพยากรธรรมชาติ",
        subjects: "ระบบนิเวศ, มลพิษ, การจัดการสิ่งแวดล้อม",
        careers: "นักสิ่งแวดล้อม, นักวิจัย, งานด้านทรัพยากร"
    },

    agriculture: {
        name: "เกษตรศาสตร์",
        description: "ศึกษาเกี่ยวกับพืช สัตว์ ดิน และการผลิตทางการเกษตร",
        subjects: "พืชศาสตร์, ดิน, การเกษตร, เทคโนโลยีการเกษตร",
        careers: "นักวิชาการเกษตร, นักวิจัย, ธุรกิจการเกษตร"
    },

    health: {
        name: "วิทยาศาสตร์สุขภาพ",
        description: "ศึกษาเกี่ยวกับสุขภาพ ร่างกาย และการดูแลสุขภาพ",
        subjects: "สุขภาพ, ชีววิทยา, วิทยาศาสตร์สุขภาพ",
        careers: "งานด้านสุขภาพและสาธารณสุข"
    },

    public_health: {
        name: "สาธารณสุขศาสตร์",
        description: "เน้นการส่งเสริมสุขภาพ ป้องกันโรค และดูแลสุขภาพของประชากร",
        subjects: "ระบาดวิทยา, สุขศึกษา, อนามัยสิ่งแวดล้อม",
        careers: "นักสาธารณสุข, งานด้านสุขภาพชุมชน"
    }
};
function showFaculty(id) {

    const info = facultyInfo[id];

    if (!info) return;

    const hero = document.querySelector(".hero");

    hero.innerHTML = `
        <div class="faculty-detail">

            <button class="back-button" onclick="showResult()">
                ← กลับไปดูผลลัพธ์
            </button>

            <p class="small-title">
                FACULTY INFORMATION
            </p>

            <h1>${info.name}</h1>

            <div class="detail-box">
                <h3>เกี่ยวกับสาขานี้</h3>
                <p>${info.description}</p>
            </div>

            <div class="detail-box">
                <h3>📚 ตัวอย่างสิ่งที่เรียน</h3>
                <p>${info.subjects}</p>
            </div>

            <div class="detail-box">
                <h3>💼 ตัวอย่างสายงาน</h3>
                <p>${info.careers}</p>
            </div>

        </div>
    `;
}