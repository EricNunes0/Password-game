import sqlite3

con = sqlite3.connect("ex1.db")
cursor = con.cursor()

cursor.execute("""
    CREATE TABLE IF NOT EXISTS cadastro (
        nome VARCHAR(100) NOT NULL,
        sexo VARCHAR(1) NOT NULL,
        telefone VARCHAR(25) NOT NULL,
        email VARCHAR(100) NOT NULL,
        senha VARCHAR(100) NOT NULL
    );
""")

def insertCadastro(nome, sexo, telefone, email, senha):
    cursor = con.cursor()
    cursor.execute(f"""
        INSERT INTO cadastro (nome, sexo, telefone, email, senha)
        VALUES ('{nome}', '{sexo}', '{telefone}', '{email}', '{senha}');
    """)

def selectCadastros():
    cursor = con.cursor()
    return cursor.execute("""
        SELECT * FROM CADASTRO;
    """)

insertCadastro("Eric", "M", "21123456789", "eric@gmail.com", "12345678")
insertCadastro("Gabriel", "M", "21987654321", "gabriel@gmail.com", "87654321")
insertCadastro("João", "M", "21123459876", "joao@hotmail.com", "12348765")
insertCadastro("Isabella", "F", "21543216789", "isabella@outlook.com", "135792468")
insertCadastro("Daniel", "M", "21975318642", "daniel@yahoo.com", "65743542")
insertCadastro("Larissa", "F", "21111111111", "larissa@gmail.com", "11111111")
insertCadastro("Nathan", "M", "21222222222", "nathan20@hotmail.com", "222222222")
insertCadastro("Luiza", "F", "21333303030", "luiza2000@gmail.com", "987654321")
insertCadastro("Thiago", "M", "21999999999", "thiago@yahoo.com", "1919191911")
insertCadastro("Carol", "F", "2205050505", "carol3001@outlook.com", "987654321")

# Consulta SQL com retorno de 1 linha
print("Consulta SQL com retorno de 1 linha:")
select = selectCadastros()
fetchedOne = select.fetchone()
print(fetchedOne)

# Consulta SQL com retorno de 10 linhas e 4 colunas
print("\t\nConsulta SQL com retorno de 10 linhas e 4 colunas:")
cursor = con.cursor()
select = cursor.execute("""
    SELECT nome, sexo, telefone, email FROM CADASTRO;
""")
fetchedMany = select.fetchmany(size = 10)
for f in fetchedMany:
    print(f)

# Consulta SQL com retorno de número indefinido de linhas
print("\t\nConsulta SQL com retorno de número indefinido de linhas:")
select = selectCadastros()
fetchedAll = select.fetchall()
for f in fetchedAll:
    print(f)

con.close()