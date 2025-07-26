document.addEventListener('DOMContentLoaded', () => {
    const curriculumGrid = document.querySelector('.curriculum-grid');
    const messageOverlay = document.getElementById('message-overlay');
    const messageText = document.getElementById('message-text');
    const closeMessageButton = document.getElementById('close-message');

    // Define la estructura de tu malla curricular con requisitos
    // Cada curso tiene un 'id' único y una lista de 'prerequisites' (IDs de cursos)
    const curriculum = [
        {
            semester: "Semestre 1 (PERIODO 1)",
            courses: [
                { id: "english1", name: "ENGLISH I", prerequisites: [] },
                { id: "intro_lic", name: "INTRODUCCIÓN A LA LICENCIATURA EN LENGUAS EXTRANJERAS CON ÉNFASIS EN INGLÉS", prerequisites: [] },
                { id: "catedra_unadista", name: "CATEDRA UNADISTA", prerequisites: [] },
                { id: "competencias_comunicativas", name: "COMPETENCIAS COMUNICATIVAS", prerequisites: [] },
                { id: "etica_ciudadania", name: "ÉTICA Y CIUDADANÍA", prerequisites: [] }
            ]
        },
        {
            semester: "Semestre 2 (PERIODO 2)",
            courses: [
                { id: "english2", name: "ENGLISH II", prerequisites: ["english1"] },
                { id: "epistemologia_pedagogia", name: "EPISTEMOLOGÍA E HISTORIA DE LA PEDAGOGÍA", prerequisites: [] },
                { id: "servicio_social", name: "SERVICIO SOCIAL UNADISTA", prerequisites: [] },
                { id: "lengua_materna", name: "LENGUA MATERNA", prerequisites: [] },
                { id: "pensamiento_logico", name: "PENSAMIENTO LÓGICO Y MATEMÁTICO", prerequisites: [] },
                { id: "herramientas_digitales", name: "HERRAMIENTAS DIGITALES PARA LA GESTIÓN DEL CONOCIMIENTO", prerequisites: [] }
            ]
        },
        {
            semester: "Semestre 3 (PERIODO 3)",
            courses: [
                { id: "english3", name: "ENGLISH III", prerequisites: ["english2"] },
                { id: "fund_inv", name: "FUNDAMENTOS Y GENERALIDADES DE LA INVESTIGACIÓN", prerequisites: [] },
                { id: "fund_gestion_integral", name: "FUNDAMENTOS EN GESTIÓN INTEGRAL", prerequisites: [] },
                { id: "didactica", name: "DIDÁCTICA", prerequisites: [] },
                { id: "intro_linguistics", name: "INTRODUCTION TO LINGUISTICS", prerequisites: [] },
                { id: "electiva_formacion_compl", name: "CURSO ELECTIVO DE FORMACIÓN COMPLEMENTARIA", prerequisites: [] }
            ]
        },
        {
            semester: "Semestre 4 (PERIODO 4)",
            courses: [
                { id: "english4", name: "ENGLISH IV", prerequisites: ["english3"] },
                { id: "inv_educativa_pedagogica", name: "INVESTIGACIÓN EDUCATIVA Y PEDAGÓGICA", prerequisites: ["fund_inv"] },
                { id: "electiva_disciplinar_basica", name: "CURSO ELECTIVO DISCIPLINAR BÁSICO COMÚN", prerequisites: [] },
                { id: "didactics_english", name: "DIDACTICS OF ENGLISH", prerequisites: ["didactica", "english3"] },
                { id: "foreign_lang_acquisition", name: "FOREIGN LANGUAGE ACQUISITION AND LEARNING", prerequisites: ["intro_linguistics"] },
                { id: "electiva_interdisciplinar_basica1", name: "CURSO ELECTIVO INTERDISCIPLINAR BÁSICO COMÚN", prerequisites: [] }
            ]
        },
        {
            semester: "Semestre 5 (PERIODO 5)",
            courses: [
                { id: "english5", name: "ENGLISH V", prerequisites: ["english4"] },
                { id: "teorias_aprendizaje", name: "TEORÍAS DEL APRENDIZAJE", prerequisites: [] },
                { id: "english_phonetics", name: "ENGLISH PHONETICS", prerequisites: ["english4"] },
                { id: "evaluacion", name: "EVALUACIÓN", prerequisites: [] },
                { id: "methodology_teaching", name: "METHODOLOGY IN FOREIGN LANGUAGE TEACHING", prerequisites: ["didactics_english"] },
                { id: "electiva_interdisciplinar_basica2", name: "CURSO ELECTIVO INTERDISCIPLINAR BÁSICO COMÚN", prerequisites: [] }
            ]
        },
        {
            semester: "Semestre 6 (PERIODO 6)",
            courses: [
                { id: "english6", name: "ENGLISH VI", prerequisites: ["english5"] },
                { id: "etica_prof_docente", name: "ÉTICA DE LA PROFESIÓN DOCENTE", prerequisites: ["etica_ciudadania"] },
                { id: "specific_elective_course1", name: "SPECIFIC DISCIPLINARY ELECTIVE COURSE", prerequisites: [] },
                { id: "enfoques_curriculares", name: "ENFOQUES CURRICULARES", prerequisites: [] },
                { id: "teaching_children_adults", name: "TEACHING ENGLISH TO CHILDREN, ADOLESCENTS AND ADULTS", prerequisites: ["methodology_teaching"] },
                { id: "electiva_disciplinar_basica2", name: "CURSO ELECTIVO DISCIPLINAR BÁSICO COMÚN", prerequisites: [] }
            ]
        },
        {
            semester: "Semestre 7 (PERIODO 7)",
            courses: [
                { id: "english7", name: "ENGLISH VII: ENGLISH CONVERSATION", prerequisites: ["english6"] },
                { id: "matematicas_resolucion", name: "MATEMÁTICAS PARA LA RESOLUCIÓN DE PROBLEMAS", prerequisites: ["pensamiento_logico"] },
                { id: "materials_design", name: "MATERIALS DESIGN", prerequisites: ["teaching_children_adults"] },
                { id: "testing_evaluation_elt", name: "TESTING AND EVALUATION IN ELT", prerequisites: ["evaluacion"] },
                { id: "teacher_development", name: "TEACHER DEVELOPMENT", prerequisites: [] },
                { id: "electiva_lengua_extranjera1", name: "CURSO ELECTIVO LENGUA EXTRANJERA I", prerequisites: ["english6"] }
            ]
        },
        {
            semester: "Semestre 8 (PERIODO 8)",
            courses: [
                { id: "specific_elective_course2", name: "SPECIFIC DISCIPLINARY ELECTIVE COURSE", prerequisites: [] },
                { id: "educacion_transf_social", name: "EDUCACIÓN PARA LA TRANSFORMACIÓN SOCIAL", prerequisites: [] },
                { id: "legislacion_educativa", name: "LEGISLACIÓN EDUCATIVA", prerequisites: [] },
                { id: "technology_foreign_lang_teaching", name: "TECHNOLOGY IN FOREIGN LANGUAGE TEACHING", prerequisites: ["herramientas_digitales", "methodology_teaching"] },
                { id: "integral_pedagogical_practice", name: "INTEGRAL PEDAGOGICAL PRACTICE", prerequisites: ["teaching_children_adults", "inv_educativa_pedagogica"] }, // Example: Requires teaching and research
                { id: "electiva_lengua_extranjera2", name: "CURSO ELECTIVO LENGUA EXTRANJERA II", prerequisites: ["electiva_lengua_extranjera1"] }
            ]
        },
        {
            semester: "Semestre 9 (PERIODO 9)",
            courses: [
                { id: "english_composition", name: "ENGLISH COMPOSITION (ELECTIVE)", prerequisites: ["english7"] },
                { id: "escenarios_inclusivos", name: "ESCENARIOS EDUCATIVOS INCLUSIVOS", prerequisites: [] },
                { id: "admin_gestion_educativas", name: "ADMINISTRACIÓN Y GESTIÓN EDUCATIVAS", prerequisites: [] },
                { id: "educational_research", name: "EDUCATIONAL RESEARCH", prerequisites: ["inv_educativa_pedagogica"] },
                { id: "research_pedagogical_practice", name: "RESEARCH PEDAGOGICAL PRACTICE", prerequisites: ["integral_pedagogical_practice", "educational_research"] },
                { id: "electiva_formacion_compl2", name: "CURSO ELECTIVO DE FORMACIÓN COMPLEMENTARIA", prerequisites: [] }
            ]
        },
        {
            semester: "Semestre 10 (PERIODO 10)",
            courses: [
                { id: "specific_elective_course3", name: "SPECIFIC DISCIPLINARY ELECTIVE COURSE", prerequisites: [] },
                { id: "electiva_disciplinar_basica3", name: "CURSO ELECTIVO DISCIPLINAR BÁSICO COMÚN", prerequisites: [] },
                { id: "research_project", name: "RESEARCH PROJECT", prerequisites: ["educational_research"] },
                { id: "practicas_educativas_tic", name: "PRÁCTICAS EDUCATIVAS MEDIADAS POR TIC", prerequisites: ["technology_foreign_lang_teaching", "integral_pedagogical_practice"] },
                { id: "pedagogical_practice_online", name: "PEDAGOGICAL PRACTICE IN ONLINE ENVIRONMENTS", prerequisites: ["practicas_educativas_tic"] },
                { id: "electiva_formacion_compl3", name: "CURSO ELECTIVO DE FORMACIÓN COMPLEMENTARIA", prerequisites: [] }
            ]
        }
    ];

    // Guarda el estado de los ramos aprobados en localStorage
    let approvedCourses = JSON.parse(localStorage.getItem('approvedCourses')) || [];

    // Función para renderizar la malla curricular
    function renderCurriculum() {
        curriculumGrid.innerHTML = ''; // Limpia el contenido existente
        curriculum.forEach(sem => {
            const semesterDiv = document.createElement('div');
            semesterDiv.classList.add('semester');

            const semesterTitle = document.createElement('h2');
            semesterTitle.textContent = sem.semester;
            semesterDiv.appendChild(semesterTitle);

            const courseList = document.createElement('ul');
            courseList.classList.add('course-list');

            sem.courses.forEach(course => {
                const courseItem = document.createElement('li');
                courseItem.classList.add('course-item');
                courseItem.dataset.courseId = course.id;
                courseItem.textContent = course.name;

                // Añade la clase 'approved' si el ramo ya está aprobado
                if (approvedCourses.includes(course.id)) {
                    courseItem.classList.add('approved');
                } else {
                    // Si no está aprobado, verifica si está bloqueado
                    const isBlocked = !checkPrerequisites(course.id);
                    if (isBlocked) {
                        courseItem.classList.add('blocked');
                    }
                }

                courseItem.addEventListener('click', () => toggleCourseStatus(course.id));
                courseList.appendChild(courseItem);
            });
            semesterDiv.appendChild(courseList);
            curriculumGrid.appendChild(semesterDiv);
        });
    }

    // Función para verificar los requisitos de un ramo
    function checkPrerequisites(courseId) {
        const course = curriculum.flatMap(sem => sem.courses).find(c => c.id === courseId);
        if (!course) return false;

        return course.prerequisites.every(prereqId => approvedCourses.includes(prereqId));
    }

    // Función para mostrar mensajes de advertencia
    function showMessage(message) {
        messageText.textContent = message;
        messageOverlay.classList.add('show');
    }

    // Función para ocultar mensajes
    closeMessageButton.addEventListener('click', () => {
        messageOverlay.classList.remove('show');
    });

    // Función para alternar el estado de un ramo (aprobado/no aprobado)
    function toggleCourseStatus(courseId) {
        const courseElement = document.querySelector(`[data-course-id="${courseId}"]`);
        const course = curriculum.flatMap(sem => sem.courses).find(c => c.id === courseId);

        if (approvedCourses.includes(courseId)) {
            // Si ya está aprobado, lo desaprueba
            approvedCourses = approvedCourses.filter(id => id !== courseId);
            localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses));
            renderCurriculum(); // Vuelve a renderizar para actualizar estados
        } else {
            // Si no está aprobado, intenta aprobarlo
            if (checkPrerequisites(courseId)) {
                approvedCourses.push(courseId);
                localStorage.setItem('approvedCourses', JSON.stringify(approvedCourses));
                renderCurriculum(); // Vuelve a renderizar para actualizar estados
            } else {
                let missingPrereqs = course.prerequisites.filter(prereqId => !approvedCourses.includes(prereqId));
                let missingPrereqNames = missingPrereqs.map(id => curriculum.flatMap(sem => sem.courses).find(c => c.id === id).name);
                showMessage(`No puedes aprobar "${course.name}" todavía. Te faltan los siguientes ramos: ${missingPrereqNames.join(', ')}.`);
            }
        }
    }

    // Renderiza la malla inicial al cargar la página
    renderCurriculum();
});
