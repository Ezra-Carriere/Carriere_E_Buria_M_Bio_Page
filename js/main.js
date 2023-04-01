function openDetails(memberId) {
  const detailsElement = document.getElementById(`details-${memberId}`);
  detailsElement.style.display = 'block';
}

function hideDetails(memberId) {
  const detailsElement = document.getElementById(`details-${memberId}`);
  detailsElement.style.display = 'none';
}