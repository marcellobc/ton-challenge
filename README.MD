<h1>Introdução</h1>
<p>Para realização deste desafio, foi utilizado para lidar com as lambdas, o serverless framework com o template do
    express-api. E, para lidar com a infraestrutura na AWS, o Terraform.</p>
<p>A aplicação se encontra online. <a target="_blank"
        href="https://ehgsoo20j8.execute-api.us-east-1.amazonaws.com/dev">Clique
        aqui para acessar</a></p>

<h1>Iniciando a aplicação</h1>
<h3>Requisitos:</h3>
<ol>
    <li>Nodejs instalado. <a target="_blank" href="https://nodejs.org/pt-br/download/">Disponível aqui!</a>
    </li>
    <li>AWS-CLI instalado e configurado. <a target="_blank" href="https://aws.amazon.com/pt/cli/">Disponível aqui!</a>
    </li>
    <li>Terraform instalado e configurado. <a target="_blank" href="https://www.terraform.io/downloads.html">Disponível
            aqui!</a></li>
    <li>Serverless Framework instalado e configurado. <a target="_blank"
            href="https://www.serverless.com/framework/docs/providers/aws/guide/installation/">Disponível
            aqui!</a></li>
</ol>
<h3>1º passo: Disponibilizar Infraestrutura na AWS</h3>
<ol>
    <li>Acessar pasta terraform</li>
    <li>rodar o comando: terraform init</li>
    <li>rodar o comando: terraform apply</li>
</ol>

<h3>2º passo: Disponibilizar aplicação com o Serverless Framework</h3>
<ol>
    <li>Acessar pasta backend</li>
    <li>configurar o arquivo serverless.yml com as suas credenciais</li>
    <li>rodar o comando: serverless deploy</li>
</ol>

<h3>**Rodar aplicação localmente</h3>
<ol>
    <li>Acessar pasta backend</li>
    <li>rodar o comando: npm install</li>
    <li>rodar o comando: npm run start</li>
</ol>

<div>
    <h4><b>Obs:</b> Possíveis variáveis no .ENV: </h4>
    <ol>
        <li><b>AWS_REGION</b>: define a região padrão em que os serviços da AWS serão executado. default:
            <b>'us-east-1'</b>. Esteja ciente que se for alterado a região, alterar também o campo "region" no arquivo /terraform/main.tf e fazer apply para disponibilizar novamente os serviços na região informada.</li>
        <li><b>PORT</b>: define a porta em que o processo irá rodar. default: <b>3333</b>.</li>
    </ol>
</div>

<h1>Rotas</h1>
<p><b>baseURL:</b> https://ehgsoo20j8.execute-api.us-east-1.amazonaws.com/dev</p>
<div>
    <h3>Listar Funcionários [GET] /public/employees</h3>
    <pre>
Resposta: [
    {
        "updated_at": "2021-03-25T03:50:57.491Z",
        "created_at": "2021-03-25T03:50:40.600Z",
        "id": "44657580-8d1d-11eb-bec7-0959dc03d05e",
        "role": "pintor",
        "name": "Manuel",
        "age": 57
    }
]
    </pre>
</div>
<div>
    <h3>Exibir funcionário [GET] /public/employees/:id</h3>
    <pre>
Resposta: {
    "updated_at": "2021-03-25T03:50:40.600Z",
    "created_at": "2021-03-25T03:50:40.600Z",
    "role": "dev",
    "id": "44657580-8d1d-11eb-bec7-0959dc03d05e",
    "name": "Manuel",
    "age": 21
}
    </pre>
</div>
<div>
    <h3>Criar funcionário [POST] /public/employees</h3>
    <pre>
Payload: {
    "name": "Manuel",
    "age": 21,
    "role": "dev"
}
    </pre>
    <pre>
Resposta: {
    "name": "Manuel",
    "age": 21,
    "role": "dev",
    "created_at": "2021-03-25T06:04:29.241Z",
    "updated_at": "2021-03-25T06:04:29.241Z",
    "id": "f5d6da90-8d2f-11eb-954a-5f8100ca2644"
}
    </pre>
</div>

<div>
    <h3>Editar funcionário [PUT] /public/employees/:id</h3>
    <pre>
Payload: {
    "name": "Manuel",      *opcional
    "age": 58,             *opcional
    "role": "cantor"       *opcional
}
    </pre>
    <pre>
Resposta: {
    "updated_at": "2021-03-25T06:09:07.489Z",
    "created_at": "2021-03-25T06:04:29.241Z",
    "id": "f5d6da90-8d2f-11eb-954a-5f8100ca2644",
    "role": "cantor",
    "name": "Manuel",
    "age": 58
}
    </pre>
</div>
<div>
    <h3>Deletar funcionário [DELETE] /public/employees/:id</h3>
    <pre>
Resposta: {
    "deleted": true
}
    </pre>
</div>
