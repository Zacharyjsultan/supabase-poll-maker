export function renderPoll(poll) {
    const container = document.createElement('div');
    container.classList.add('poll-detail');

    const h4 = document.createElement('h4');
    h4.textContent = poll.question;

    const p1 = document.createElement('p');
    p1.textContent = `${poll.option_a}: ${poll.option_votes_a}`;

    const p2 = document.createElement('p');
    p2.textContent = `${poll.option_b}: ${poll.option_votes_b}`;

    container.append(h4, p1, p2);

    return container;

}