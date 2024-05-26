-- CreateTable
CREATE TABLE "Tipos" (
    "tipo_id" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,

    CONSTRAINT "Tipos_pkey" PRIMARY KEY ("tipo_id")
);

-- CreateTable
CREATE TABLE "Maestros" (
    "id_maestro" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "tipoId" TEXT NOT NULL,
    "registro_completo" TEXT NOT NULL DEFAULT '0',

    CONSTRAINT "Maestros_pkey" PRIMARY KEY ("id_maestro")
);

-- CreateTable
CREATE TABLE "Carrera" (
    "carrera_id" INTEGER NOT NULL,
    "nombre_carre" TEXT NOT NULL,
    "duracion_anos" INTEGER NOT NULL,

    CONSTRAINT "Carrera_pkey" PRIMARY KEY ("carrera_id")
);

-- CreateTable
CREATE TABLE "Alumno" (
    "mat_alu" TEXT NOT NULL,
    "nom_alu" TEXT NOT NULL,
    "edad_alu" INTEGER NOT NULL,
    "semestre_alu" INTEGER NOT NULL,
    "carrera_id" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "Alumno_pkey" PRIMARY KEY ("mat_alu")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "tipo" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Materias" (
    "id_Mate" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "creditos" INTEGER NOT NULL,

    CONSTRAINT "Materias_pkey" PRIMARY KEY ("id_Mate")
);

-- CreateTable
CREATE TABLE "Materia_Maestros" (
    "id_maestro" TEXT NOT NULL,
    "id_Mate" INTEGER NOT NULL,
    "dia" TEXT NOT NULL,
    "horaInicio" TIMESTAMP(3) NOT NULL,
    "horaFin" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Materia_Maestros_pkey" PRIMARY KEY ("id_maestro","id_Mate","dia","horaInicio","horaFin")
);

-- CreateTable
CREATE TABLE "Materi_Alumno" (
    "mat_alu" TEXT NOT NULL,
    "id_Mate" INTEGER NOT NULL,

    CONSTRAINT "Materi_Alumno_pkey" PRIMARY KEY ("mat_alu","id_Mate")
);

-- CreateTable
CREATE TABLE "Alu_Maestros" (
    "mat_alu" TEXT NOT NULL,
    "id_maestro" TEXT NOT NULL,

    CONSTRAINT "Alu_Maestros_pkey" PRIMARY KEY ("mat_alu","id_maestro")
);

-- CreateTable
CREATE TABLE "Asistencia" (
    "id" SERIAL NOT NULL,
    "qrCode" TEXT NOT NULL,
    "dia" TIMESTAMP(3) NOT NULL,
    "id_maestro" TEXT NOT NULL,
    "materia_id" INTEGER NOT NULL,
    "alumno_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Asistencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Result" (
    "id" SERIAL NOT NULL,
    "answer" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "procedure" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Result_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Maestros" ADD CONSTRAINT "Maestros_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "Tipos"("tipo_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alumno" ADD CONSTRAINT "Alumno_tipo_fkey" FOREIGN KEY ("tipo") REFERENCES "Tipos"("tipo_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alumno" ADD CONSTRAINT "Alumno_carrera_id_fkey" FOREIGN KEY ("carrera_id") REFERENCES "Carrera"("carrera_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_tipo_fkey" FOREIGN KEY ("tipo") REFERENCES "Tipos"("tipo_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materia_Maestros" ADD CONSTRAINT "Materia_Maestros_id_maestro_fkey" FOREIGN KEY ("id_maestro") REFERENCES "Maestros"("id_maestro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materia_Maestros" ADD CONSTRAINT "Materia_Maestros_id_Mate_fkey" FOREIGN KEY ("id_Mate") REFERENCES "Materias"("id_Mate") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materi_Alumno" ADD CONSTRAINT "Materi_Alumno_mat_alu_fkey" FOREIGN KEY ("mat_alu") REFERENCES "Alumno"("mat_alu") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materi_Alumno" ADD CONSTRAINT "Materi_Alumno_id_Mate_fkey" FOREIGN KEY ("id_Mate") REFERENCES "Materias"("id_Mate") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alu_Maestros" ADD CONSTRAINT "Alu_Maestros_mat_alu_fkey" FOREIGN KEY ("mat_alu") REFERENCES "Alumno"("mat_alu") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Alu_Maestros" ADD CONSTRAINT "Alu_Maestros_id_maestro_fkey" FOREIGN KEY ("id_maestro") REFERENCES "Maestros"("id_maestro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_alumno_id_fkey" FOREIGN KEY ("alumno_id") REFERENCES "Alumno"("mat_alu") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_id_maestro_fkey" FOREIGN KEY ("id_maestro") REFERENCES "Maestros"("id_maestro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Asistencia" ADD CONSTRAINT "Asistencia_materia_id_fkey" FOREIGN KEY ("materia_id") REFERENCES "Materias"("id_Mate") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
