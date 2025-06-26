const client = ZAFClient.init();
client.on('app.registered', function() {
            console.log('App registered!');
            document.getElementById('loadZip').addEventListener('click', loadTicketComments);
        });

        async function loadTicketComments(){
            try{
                // Fetch ticket comments
                const ticketData = await client.get('ticket.comments');
                console.log('Ticket comments:', ticketData);

                // Extract comments
                const comments = ticketData['ticket.comments'].map(comment => comment.value);
                const commentText = comments.join('\n\n');

                // Display the result
                document.getElementById('zipContents').textContent = commentText;

            } catch {
                console.error('Error loading ticket comments');
                document.getElementById('zipContents').textContent = "Error loading ticket comments";

            }
        }