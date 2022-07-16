const template = document.createElement('template')
template.setAttribute('id', 'template')

template.innerHTML = `
    <style>
        .wrapper{
            display: flex;
            justify-content: center;
            padding: 0 1.75em;
        }
        .card{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            margin-bottom: 1em;
            padding: 2em 1em;
            border: 1px solid black;
            border-radius: 0.75em;
        }
        h2{
            align-self: center;
            margin: 0;
            margin-bottom: 2em;
            text-align: center;
        }
        img{
            width: 250px;
            align-self: center;
        }
        .label {
            font-weight: bold;
        }
        .separator {
            width: 1em;
        }
    </style>
    <div class="wrapper">
        <div class="card">
            <h2 id="name"></h1>
            <img id="img" />
            <table class="details">
                <tbody>
                    <tr class="row">
                        <td class="label">
                            Diet
                        </td>
                        <td class="separator">
                            :
                        </td>
                        <td id="diet-val" class="value">
                            
                        </td>
                    </tr>
                    <tr class="row">
                        <td class="label">
                            Length
                        </td>
                        <td class="separator">
                            :
                        </td>
                        <td id="length-val" class="value">
                            
                        </td>
                    </tr>
                    <tr class="row">
                        <td class="label">
                            Weight
                        </td>
                        <td class="separator">
                            :
                        </td>
                        <td id="weight-val" class="value">
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
`
document.body.appendChild(template)