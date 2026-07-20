from pathlib import Path
from shutil import copy2

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PDF = ROOT / "output" / "pdf" / "sherwynd-liew-cv-revised.pdf"
PUBLIC_PDF = ROOT / "public" / "sherwynd-liew-cv-revised.pdf"

INK = colors.HexColor("#17211C")
MUTED = colors.HexColor("#4F5D56")
ACCENT = colors.HexColor("#137A54")
LINE = colors.HexColor("#CBD8D1")
LIGHT = colors.HexColor("#EFF6F2")


def build_styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name",
            parent=base["Title"],
            fontName="Helvetica-Bold",
            fontSize=21,
            leading=24,
            alignment=TA_CENTER,
            textColor=INK,
            spaceAfter=3,
        ),
        "title": ParagraphStyle(
            "Title",
            parent=base["Normal"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=13,
            alignment=TA_CENTER,
            textColor=ACCENT,
            spaceAfter=4,
        ),
        "contact": ParagraphStyle(
            "Contact",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=8.2,
            leading=11,
            alignment=TA_CENTER,
            textColor=MUTED,
            spaceAfter=4,
        ),
        "section": ParagraphStyle(
            "Section",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=10.5,
            leading=13,
            textColor=ACCENT,
            spaceBefore=8,
            spaceAfter=4,
            keepWithNext=True,
        ),
        "summary": ParagraphStyle(
            "Summary",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9,
            leading=12.5,
            textColor=INK,
            spaceAfter=4,
        ),
        "job": ParagraphStyle(
            "Job",
            parent=base["Heading3"],
            fontName="Helvetica-Bold",
            fontSize=9.6,
            leading=12,
            textColor=INK,
            spaceBefore=5,
            spaceAfter=1,
            keepWithNext=True,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=8.2,
            leading=10.5,
            textColor=MUTED,
            spaceAfter=2,
            keepWithNext=True,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.55,
            leading=11.4,
            leftIndent=10,
            firstLineIndent=-7,
            bulletIndent=0,
            textColor=INK,
            spaceAfter=2,
        ),
        "skill": ParagraphStyle(
            "Skill",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.7,
            leading=12,
            textColor=INK,
            spaceAfter=3,
        ),
        "project": ParagraphStyle(
            "Project",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.6,
            leading=11.5,
            textColor=INK,
            spaceAfter=5,
        ),
        "note": ParagraphStyle(
            "Note",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=8.5,
            leading=11.5,
            textColor=INK,
            borderColor=LINE,
            borderWidth=0.6,
            borderPadding=7,
            backColor=LIGHT,
            spaceBefore=3,
            spaceAfter=4,
        ),
        "footer": ParagraphStyle(
            "Footer",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.5,
            textColor=MUTED,
            alignment=TA_LEFT,
        ),
    }


def add_section(story, styles, title):
    story.append(Paragraph(title.upper(), styles["section"]))
    story.append(
        HRFlowable(
            width="100%",
            thickness=0.7,
            color=LINE,
            spaceBefore=0,
            spaceAfter=3,
        )
    )


def add_bullets(story, styles, items):
    for item in items:
        story.append(Paragraph(item, styles["bullet"], bulletText="-"))


def add_job(story, styles, role, company, period, location, stack, bullets):
    block = [
        Paragraph(f"{role} | {company}", styles["job"]),
        Paragraph(f"{period} | {location}", styles["meta"]),
        Paragraph(f"<b>Environment:</b> {stack}", styles["meta"]),
    ]
    for item in bullets:
        block.append(Paragraph(item, styles["bullet"], bulletText="-"))
    story.append(KeepTogether(block))


def draw_page(canvas, doc, styles):
    canvas.saveState()
    width, _ = A4
    y = 10 * mm
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(doc.leftMargin, y + 5 * mm, width - doc.rightMargin, y + 5 * mm)
    footer = Paragraph(
        f"Sherwynd Liew Li-Yuan | Backend Developer &amp; AWS DevOps | Page {doc.page}",
        styles["footer"],
    )
    footer.wrapOn(canvas, width - doc.leftMargin - doc.rightMargin, 8 * mm)
    footer.drawOn(canvas, doc.leftMargin, y)
    canvas.restoreState()


def build_cv():
    OUTPUT_PDF.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_PDF.parent.mkdir(parents=True, exist_ok=True)
    styles = build_styles()
    doc = SimpleDocTemplate(
        str(OUTPUT_PDF),
        pagesize=A4,
        rightMargin=15 * mm,
        leftMargin=15 * mm,
        topMargin=13 * mm,
        bottomMargin=19 * mm,
        title="Sherwynd Liew Li-Yuan - Backend Developer and AWS DevOps CV",
        author="Sherwynd Liew Li-Yuan",
        subject="Backend Developer and AWS DevOps Curriculum Vitae",
    )

    story = [
        Paragraph("SHERWYND LIEW LI-YUAN", styles["name"]),
        Paragraph("BACKEND DEVELOPER | PHP, LARAVEL &amp; AWS DEVOPS", styles["title"]),
        Paragraph(
            "+60 16 950 8763 | sherwyndliewliyuan@gmail.com | "
            "Kuala Lumpur / Petaling Jaya, Malaysia",
            styles["contact"],
        ),
        Paragraph(
            '<link href="https://www.linkedin.com/in/sherwynd-liew-590843171/">LinkedIn</link>'
            " | "
            '<link href="https://github.com/sherwynd">GitHub: sherwynd</link>'
            " | "
            '<link href="https://github.com/shawn627">GitHub: shawn627</link>',
            styles["contact"],
        ),
    ]

    add_section(story, styles, "Professional Summary")
    story.append(
        Paragraph(
            "Backend Developer with 1+ years of experience building PHP/Laravel and "
            "Node.js services, RESTful APIs, and cloud-ready applications. Hands-on "
            "experience managing AWS ECS and EC2 Auto Scaling workloads, provisioning "
            "server infrastructure with CloudFormation, and investigating server and "
            "client request issues with AWS Console and CloudWatch. Known for "
            "self-directed learning, practical troubleshooting, and taking ownership "
            "from application code through deployment infrastructure.",
            styles["summary"],
        )
    )

    add_section(story, styles, "Professional Experience")
    add_job(
        story,
        styles,
        "Backend Developer",
        "DES DIGITAL MARKETING Sdn Bhd",
        "Apr 2025 - Present",
        "Subang Jaya, Selangor",
        "PHP, Laravel, Node.js, TypeScript, MySQL, AWS Lambda, ECS, EC2, CloudFormation, CloudWatch, Docker",
        [
            "Develop and maintain backend services using PHP, Laravel, Node.js, TypeScript, and MySQL, with a focus on reliable API behavior and maintainable code.",
            "Manage containerized workloads across AWS ECS and EC2 Auto Scaling, supporting scalable deployments and a documented 45% reduction in server traffic load.",
            "Create AWS CloudFormation stacks to provision repeatable server infrastructure and reduce manual environment setup.",
            "Investigate server health, deployment behavior, and client request issues using AWS Console and CloudWatch, translating findings into corrective actions.",
            "Implemented AWS Lambda authentication services with OAuth 2.0, contributing to a documented 30% reduction in infrastructure cost.",
        ],
    )
    add_job(
        story,
        styles,
        "Backend Developer",
        "IP ServerOne Solutions",
        "Sep 2024 - Dec 2024",
        "Petaling Jaya, Selangor",
        "Laravel, PHP, MariaDB, Docker, Kubernetes",
        [
            "Developed and maintained Laravel REST APIs for NovaCloud Hosting, a multi-region cloud platform designed to route users to nearby infrastructure.",
            "Supported backend reliability and performance across multi-region deployments using PHP, MariaDB, Docker, and Kubernetes workflows.",
            "Implemented automated unit tests to improve code reliability and identify defects before production release.",
        ],
    )
    add_job(
        story,
        styles,
        "Full Stack Developer",
        "Fusionex Group",
        "Jul 2023 - Dec 2023",
        "Petaling Jaya, Selangor",
        "Vue.js, Node.js, Express.js, MongoDB",
        [
            "Developed a custom transportation web application using Vue.js, Express.js, Node.js, and MongoDB.",
            "Integrated a machine-learning handwriting recognition module to improve document processing workflows.",
            "Collaborated in Agile Scrum ceremonies including sprint planning, backlog refinement, and daily standups.",
        ],
    )

    story.append(PageBreak())
    add_section(story, styles, "Technical Skills")
    skills = [
        ("Backend", "PHP, Laravel, Node.js, TypeScript, JavaScript, RESTful APIs, OAuth 2.0, SOLID principles"),
        ("AWS & DevOps", "AWS ECS, EC2, Auto Scaling, Lambda, CloudFormation, CloudWatch, Docker, CI/CD"),
        ("Databases", "MySQL, MariaDB, MongoDB, PostgreSQL, Supabase, Firebase"),
        ("Tools & Workflow", "Git, GitHub, GitLab, Jira, DockerHub, VS Code, Cursor, Terminal, Agile, Scrum"),
        ("Additional Development", "Next.js, React, Vue.js, Angular, Python, Flask, Java, Tailwind CSS"),
    ]
    for label, values in skills:
        story.append(Paragraph(f"<b>{label}:</b> {values}", styles["skill"]))

    add_section(story, styles, "Core Strengths")
    story.append(
        Paragraph(
            "<b>Analytical problem-solving:</b> traces issues across client requests, "
            "application services, container workloads, and AWS infrastructure.<br/>"
            "<b>Communication and ownership:</b> documents findings, collaborates through "
            "Jira and Agile workflows, and follows issues through resolution.<br/>"
            "<b>Adaptability:</b> independently learns unfamiliar cloud services and applies "
            "them to active delivery and troubleshooting work.",
            styles["skill"],
        )
    )

    add_section(story, styles, "Education")
    story.extend(
        [
            Paragraph(
                "<b>Bachelor of Information Systems</b> | University Malaya | Jan 2025",
                styles["job"],
            ),
            Paragraph(
                "CGPA: 3.78 / 4.00 | Programme Unit, Students' Union | UMHackathon participant | Programming League National committee",
                styles["meta"],
            ),
            Paragraph(
                "<b>Science Stream</b> | Johor Matriculation College",
                styles["job"],
            ),
            Paragraph(
                "<b>Science Stream (SPM)</b> | Sultan Abu Bakar School",
                styles["job"],
            ),
        ]
    )

    add_section(story, styles, "Selected Technical Projects")
    story.extend(
        [
            Paragraph(
                "<b>Student Sport Portal</b> | Next.js, OAuth 2.0, dashboards - Built event CRUD workflows, automated certificate generation, Google authentication, and real-time administrative reporting. "
                '<link href="https://github.com/sherwynd/FYP-Student-Sport-Portal">View repository</link>',
                styles["project"],
            ),
            Paragraph(
                "<b>Water Potability Prediction</b> | Next.js, machine learning - Built an interactive prediction application with exploratory data analysis, server-side analytics, and model comparison. "
                '<link href="https://github.com/sherwynd/water-potability-prediction">View repository</link>',
                styles["project"],
            ),
            Paragraph(
                "<b>Ecommerce Sport Website</b> | Full stack, payments - Implemented simulated payment flows, order management, blogs, and event registration. "
                '<link href="https://github.com/sherwynd/web-programming-form">View repository</link>',
                styles["project"],
            ),
        ]
    )

    add_section(story, styles, "Professional Development")
    story.append(
        Paragraph(
            "Built practical AWS knowledge through self-directed console work and "
            "production troubleshooting across ECS, EC2, Auto Scaling, CloudFormation, "
            "and CloudWatch. Current growth goal: formalize this hands-on experience "
            "through structured AWS certification study.",
            styles["note"],
        )
    )

    add_section(story, styles, "Languages")
    story.append(
        Paragraph(
            "English: Native | Chinese: Native | Malay: Advanced",
            styles["skill"],
        )
    )

    doc.build(
        story,
        onFirstPage=lambda canvas, document: draw_page(canvas, document, styles),
        onLaterPages=lambda canvas, document: draw_page(canvas, document, styles),
    )
    copy2(OUTPUT_PDF, PUBLIC_PDF)


if __name__ == "__main__":
    build_cv()
