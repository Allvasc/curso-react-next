import Titulo from "../../components/Titulo"

export default function usandoTitulo() {
    return (
        <div>
            <Titulo
                principal="Pagina de cadastro"
                secundario="Incluir, alterar e excluir coisas!"
            />
            <Titulo
                principal="Pagina de login"
                secundario="Informe seu email e senha"
                //atribuindo valor true explicitamente à pequeno
                pequeno={true}
            />
            <Titulo
                principal="Pagina de login"
                secundario="Informe seu email e senha"
                //atribuindo valor true inplicitamente à pequeno
                pequeno
            />
        </div>
    )
}