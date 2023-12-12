SELECT assignments.day, count(assignments.id) as total_assignments
FROM assignments
GROUP BY day
HAVING count(assignments.id) >= 10
ORDER BY day ASC;