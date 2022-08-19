SELECT pe.personagem_id, pe.nome, pe.nascimento, ca.casa, es.estado_sanguineo, pa.patrono FROM personagem AS pe
JOIN casa AS ca
ON ca.casa_id = pe.casa_id
JOIN estado_sanguineo AS es
ON es.estado_sanguineo_id = pe.estado_sanguineo_id
JOIN patrono AS pa
ON pa.patrono_id = pe.patrono_id;