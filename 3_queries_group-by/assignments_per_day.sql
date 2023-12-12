SELECT assignments.day, count(assignments.id) as total_assignments
FROM assignments
GROUP BY day
ORDER BY day ASC;
