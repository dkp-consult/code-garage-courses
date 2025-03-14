IDENTIFICATION DIVISION
PROGRAM-ID. SubProgram.

DATA DIVISION.
LINKAGE SECTION.
01 EMPLOYEE-ID  PIC 9(5).
01 SALARY       PIC ZZZZ9.99.
01 ERROR-CODE   PIC 9(1).

PROCEDURE DIVISION USING EMPLOYEE-ID SALARY ERROR-CODE.
    DISPLAY "Computing salary for employee : " EMPLOYEE-ID.
    DISPLAY "Salary : " SALARY.
    MOVE 0 TO ERROR-CODE.
    GOBACK.