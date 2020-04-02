
- [ ] What is the purpose of using _sessions_?

Sessions provide a way to persist data across requests. We’ll use them to save authentication information, so there is no need to re-enter credentials on every new request the client makes to the server


- [ ] What does bcrypt do to help us store passwords in a secure manner.

It hashes the password


- [ ] What does bcrypt do to slow down attackers?

It does Rounds
means an attacker needs to have the hash, know the algorithm used, and how many rounds were used to generate the hash in the first place.


- [ ] What are the three parts of the JSON Web Token?

Header Payload and Signature