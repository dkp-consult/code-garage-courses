IDENTIFICATION DIVISION.
PROGRAM-ID. HELLO-WORLD.
DATA DIVISION.
WORKING-STORAGE SECTION.
01 NOM PIC A(20).        *> 20 caractères alphabétiques
01 AGE PIC 99.           *> Nombre entier à 2 chiffres
01 SALAIRE PIC 9(5)V99.  *> Nombre avec 5 chiffres et 2 décimales
01 NUM1 PIC 9(1) VALUE 1.
01 NUM2 PIC 9(1) VALUE 2.
01 NUM3 PIC 9(1) VALUE 3.
01 RESULT PIC 9(1).

PROCEDURE DIVISION.
    DISPLAY "Hello, world !".
    MOVE "Alice" TO NOM.
    MOVE 25 TO AGE.
    MOVE 1234.56 TO SALAIRE.
    DISPLAY "Nom : " NOM.
    DISPLAY "Âge : " AGE.
    DISPLAY "Salaire : " SALAIRE.
    ADD NUM1 TO NUM2 GIVING RESULT.
    DISPLAY NUM1.
    DISPLAY NUM2.
    DISPLAY RESULT.
    COMPUTE RESULT = NUM1 + NUM2 * NUM3.
    DISPLAY RESULT.
    DISPLAY "Enter your age :".
    ACCEPT AGE.
    IF AGE >= 18 THEN
        DISPLAY "You are an adult"
    ELSE
        DISPLAY "You are a minor"
    END-IF.
    STOP RUN.

