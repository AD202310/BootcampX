SELECT day, COUNT(assignments.id) as number_of_assignments, SUM(assignments.duration) as duration
FROM assignments
GROUP BY assignments.day
ORDER BY day ASC;
