const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

const parameter1 = process.argv[2];
const values = [`${parameter1}`]

pool.query(`
SELECT  cohorts.name as cohort, teachers.name as teacher
FROM teachers
JOIN assistance_requests ON assistance_requests.teacher_id = teachers.id
JOIN students ON students.id = assistance_requests.student_id
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name = $1
GROUP BY  cohorts.name, teachers.name
ORDER BY teacher ASC;
`, values)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.cohort}: ${user.teacher}`);
  })
})

.catch(err => console.error('query error', err.stack));